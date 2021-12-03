import {Request, Response, NextFunction} from 'express'
import xss from 'xss'

interface IRequires {
  body?: IRequireBody,
  query?: IRequireQuery,
  opcionalBody?: IRequireBody,
  opcionalQuery?: IRequireQuery
}

interface IRequireBody {
  [key: string]: requestTypes
}

interface IRequireQuery {
  [key: string]: Exclude<requestTypes, 'string[]'>
}

type requestTypes = 'string' | 'string[]'

export const requireParams = (rules?: IRequires) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as string[]
    const query = req.query as unknown as string[]
    const errors: string[] = []
    if (rules?.body) {
      Object.keys(rules.body).forEach((rule) => {
        const param = body[rule]
        if (param !== undefined) {
          const type = rules.body![rule]
          if (validateType(type, param)) {
            body[rule] = process(param)
          } else {
            errors.push(`${rule} is not ${type}`)
          }
        } else {
          errors.push(`${rule} is missing in body`)
        }
      })
    }
    if (rules?.opcionalBody) {
      Object.keys(rules.opcionalBody).forEach((rule) => {
        const param = body[rule]
        if (param !== undefined) {
          const type = rules.opcionalBody![rule]
          if (validateType(type, param)) {
            body[rule] = process(param)
          } else {
            errors.push(`${rule} is not ${type}`)
          }
        } else {
          if (rules.opcionalBody![rule] === 'string') {
            body[rule] = ''
          }
          if (rules.opcionalBody![rule] === 'string[]') {
            body[rule] = []
          }
        }
      })
    }
    if (rules?.query) {
      Object.keys(rules.query).forEach((rule) => {
        const param = query[rule]
        if (param !== undefined) {
          const type = rules.query![rule]
          if (validateType(type, param)) {
            query[rule] = process(param)
          } else {
            errors.push(`${rule} is not ${type}`)
          }
        } else {
          errors.push(`${rule} is missing in query`)
        }
      })
    }
    if (rules?.opcionalQuery) {
      Object.keys(rules.query as object).forEach((rule) => {
        const param = query[rule]
        if (param !== undefined) {
          const type = rules.query![rule]
          if (validateType(type, param)) {
            query[rule] = process(param)
          } else {
            errors.push(`${rule} is not ${type}`)
          }
        } else {
          query[rule] = ''
        }
      })
    }
    Object.keys(req.params).forEach((param) => {
      const processed = process(req.params[param])
      req.params[param] = processed as any
    })
    if (errors.length > 0) {
      return res.status(400).send({error: errors})
    } else {
      return next()
    }
  }
}

const validateType = (type: requestTypes, value: string | any[]) => {
  if (type === 'string') {
    return typeof value === 'string'
  }
  if (type === 'string[]') {
    if (!Array.isArray(value)) return false
    return (value as any[]).every((v) => (typeof v === 'string'))
  }
}

const process = (param: number | string | string[]) => {
  if (typeof param === 'string') {
    return protect(param)
  }
  if (Array.isArray(param)) {
    const array: string[] = []
    param.forEach((s) => {
      s = protect(s)
      array.push(s)
    })
    return array
  }
  return param
}

export const protect = (str: string) => {
  str = xss(str)
  str = str.replace(/'/g, '\'\'')
  return str
}
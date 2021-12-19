import {DefaultTheme} from 'styled-components'

const Light: DefaultTheme = {
  title: 'Light',
  global: {
    selection: {
      background: '#88a4e6',
      foreground: '#f0f8ff'
    },
    scrollbar: {
      track: {
        background: 'undefined',
        foreground: 'undefined'
      },
      thumb: {
        background: 'undefined',
        hover: 'undefined'
      }
    },
    tooltip: {
      background: '#4e5f78',
      foreground: '#ffffff'
    },
    menu: {
      background: '#ffffff',
      foreground: '#1f222a',
      selected: {
        background: '#5C67BC',
        foreground: '#ffffff'
      }
    }
  },
  components: {
    loading: {
      background: '#f1f2f3'
    },
    console: {
      background: '#ffffff',
      topBar: {
        background: '#ffffff',
        foreground: '#4e5f78'
      },
      collapsible: {
        selectBackground: '#fff1e7',
        error: '#e71640',
        warning: '#f19b2a',
        msg: '#201f1f',
        arrow: '#4e5f78'
      },
      emptyText: '#2c3749'
    },
    popup: {
      background: '#ffffff',
      foreground: '#131212',
      title: '#545454',
      okButton: {
        background: '#5b7192',
        foreground: '#ffffff',
        disabled: {
          background: '#B7BECA',
          foreground: '#ffffff'
        }
      },
      cancelButton: {
        background: '#ea5455',
        foreground: '#ffffff',
        disabled: {
          background: '#B7BECA',
          foreground: '#ffffff'
        }
      }
    },
    footer: {
      background: '#4a5058',
      sigae: '#a9bff1',
      copyright: '#f0f8ff',
      link: '#44dd68',
      linkHover: '#28a745'
    },
    button: {
      primary: {
        background: '#5b7192',
        foreground: '#ffffff',
        disabledBackground: 'rgba(0, 0, 0, 0.32)',
        disabledForeground: '#ffffff'
      }
    },
    loginInput: {
      background: '#ffffff',
      foreground: '#17161a',
      border: '#93a6c2',
      borderHover: '#7b91b3',
      borderFocus: '#827ffe',
      inputPlaceholder: '#72718f',
      disabledBackground: '#e4dfdf',
      errorBorder: '#e44a4a',
      errorBorderHover: '#f36161',
      errorBorderFocus: '#f36161',
      placeholderBackgroundStart: '#ffffff',
      placeholderBackgroundEnd: '#fafafa',
      placeholderForeground: '#9392b9'
    },
    primaryInput: {
      background: '#ffffff',
      foreground: '#17161a',
      placeholder: '#8e8e8e',
      caret: '#17161a',
      border: '#98ACC9',
      borderHover: '#7b91b3',
      borderFocus: '#5B66B9',
      disabled: {
        background: '#e4dfdf',
        foreground: '#17161a'
      }
    },
    pinInput: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      caret: '#4982d6',
      border: '#acacac',
      borderFocus: '#4982d6',
      placeholder: '#8f8f8f',
      placeholderFocus: '#4982d6'
    },
    select: {
      popup: {
        background: '#ffffff',
        foreground: '#1f222a',
        backgroundFocus: 'rgba(0, 0, 0, 0.055)',
        foregroundFocus: '#1f222a',
        backgroundSelected: '#5C67BC',
        foregroundSelected: '#ffffff'
      }
    },
    showPassword: {
      background: '#909294',
      backgroundSelected: '#817ffe'
    },
    inputErrorIcon: {
      color: '#dc143c'
    },
    buttonSpinner: {
      color: '#ffffff'
    },
    passwordPopup: {
      background: '#ffffff',
      foreground: '#1f222a',
      border: '#b1b1b1',
      title: '#545454',
      colorBar: {
        background: '#acece6',
        foreground: '#26a69a'
      },
      colors: {
        bad: '#d13f3f',
        medium: '#e0d03c',
        good: '#28ad45'
      }
    }
  },
  pages: {
    login: {
      gradient: {
        start: '#606c88',
        end: '#404d6c'
      },
      container: '#fafafa',
      title: '#54719c',
      links: {
        foreground: '#708090',
        foregroundHover: '#4947db',
        foregroundAfter: '#6462f0'
      },
      footer: {
        background: '#d4d7da',
        foreground: '#364458',
        link: {
          foreground: '#147914',
          foregroundHover: '#2fa82f'
        }
      }
    },
    register: {
      code: {
        background: '#f1f2f3',
        title: '#3b3b4b'
      },
      form: {
        background: '#f1f2f3',
        title: '#3b3b4b',
        header: '#3b3b4b',
        banner: {
          background: '#546274',
          color: '#ffffff'
        }
      },
      validation: {
        background: '#f1f2f3',
        title: '#3b3b4b'
      }
    },
    code: {
      gradient: {
        start: '#606c88',
        end: '#404d6c'
      },
      container: '#fafafa',
      title: '#54719c',
      invalid: '#fafafa'
    },
    notFound: {
      background: '#f1f2f3',
      foreground: '#3b3b4b'
    },
    main: {
      header: {
        background: '#32323d',
        hamburger: '#c1c1c4'
      },
      loading: {
        background: '#f1f2f3',
        spinner: '#434c9c'
      },
      footer: {
        background: '#4a5058',
        sigae: '#a9bff1',
        copyright: '#f0f8ff',
        link: '#44dd68',
        linkHover: '#28a745'
      },
      sidebar: {
        background: '#3b3b4b',
        infoBackground: '#454555',
        profile: {
          defaultBackground: '#c5c5c5',
          zoomed: '#1b1a1a'
        },
        name: '#f5f5f5',
        row: {
          foreground: '#ffffff',
          hover: {
            background: '#43435a',
            foreground: '#7f94c5'
          },
          focus: '#5c67bc',
          active: '#8dd45d'
        },
        node: {
          foreground: '#ffffff',
          hover: {
            background: '#43435a',
            foreground: '#7f94c5'
          },
          open: {
            background: '#32323d',
            foreground: '#7f94c5'
          },
          focus: '#5c67bc',
          active: '#8dd45d'
        }
      },
      moduleController: {
        background: '#ffffff',
        color: '#5c66bc',
        hover: '#8d98f3'
      }
    }
  },
  popups: {
  }
}

export default Light
import chalk from 'chalk'
import dedent from 'dedent'
import inquirer from 'inquirer'
import {mongoose} from '../../database'
import {CampusModel} from '../../schemas/Campus'
import {CoursesModel} from '../../schemas/Courses'
import {ClassesModel} from '../../schemas/Classes'
import {SubjectsModel} from '../../schemas/Subjects'
import {IUser, UsersModel} from '../../schemas/Users'

((async () => {

  const answer = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'O conteúdo do banco será perdido se essa seed for executada. Deseja continuar?'
  }])

  if (!answer.confirm) {
    process.exit(0)
  }

  await mongoose.connection.db.dropDatabase()

  await CampusModel.insertMany([
    {
      name: 'Salvador'
    },
    {
      name: 'Nenhum'
    }
  ])

  await CoursesModel.insertMany([
    {
      name: 'Automação Industrial (Integrado)'
    },
    {
      name: 'Eletrônica (Integrado)'
    },
    {
      name: 'Eletrotécnica (Integrado)'
    },
    {
      name: 'Geologia (Integrado)'
    },
    {
      name: 'Química (Integrado)'
    },
    {
      name: 'Refrigeração (Integrado)'
    },
    {
      name: 'Mecânica (Integrado)'
    },
    {
      name: 'Edificações (Integrado)'
    }
  ])

  await ClassesModel.insertMany([
    {
      name: '5811',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5812',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5813',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5821',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5822',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5831',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5832',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5841',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5842',
      course: 'Automação Industrial (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9811',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9812',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9813',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9821',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9822',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9831',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9832',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '9841',
      course: 'Eletrônica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2811',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2812',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2813',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2821',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2822',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2831',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '2841',
      course: 'Eletrotécnica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '10811',
      course: 'Geologia (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '10821',
      course: 'Geologia (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '10831',
      course: 'Geologia (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '10841',
      course: 'Geologia (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8811',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8812',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8813',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8814',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8821',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8822',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8823',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8831',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8832',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8833',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8841',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '8842',
      course: 'Química (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11811',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11812',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11813',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11821',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11822',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11831',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11832',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '11841',
      course: 'Refrigeração (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6811',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6812',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6813',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6821',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6822',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6831',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6832',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '6841',
      course: 'Mecânica (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1811',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1812',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1813',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1821',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1822',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1831',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1832',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '1841',
      course: 'Edificações (Integrado)',
      campus: 'Salvador'
    },
    {
      name: '5842',
      course: 'Automação Industrial (Integrado)',
      campus: 'Feira De Santana'
    }
  ])

  await SubjectsModel.insertMany([
    {
      name: 'Artes'
    },
    {
      name: 'Automação I'
    },
    {
      name: 'Automação II'
    },
    {
      name: 'Automação Eletrônica'
    },
    {
      name: 'Biologia'
    },
    {
      name: 'Controle Automático I'
    },
    {
      name: 'Controle Automático II'
    },
    {
      name: 'Desenho'
    },
    {
      name: 'Desenho Técnico'
    },
    {
      name: 'Educação Física'
    },
    {
      name: 'Equipamentos Industriais'
    },
    {
      name: 'Espanhol'
    },
    {
      name: 'Filosofia'
    },
    {
      name: 'Física'
    },
    {
      name: 'Geografia'
    },
    {
      name: 'História'
    },
    {
      name: 'Introdução à Automação'
    },
    {
      name: 'Informática I'
    },
    {
      name: 'Informática II'
    },
    {
      name: 'Inglês'
    },
    {
      name: 'Matemática'
    },
    {
      name: 'Medição de Variáveis Industriais'
    },
    {
      name: 'Português'
    },
    {
      name: 'Química'
    },
    {
      name: 'Sociologia'
    }
  ])

  await UsersModel.insertMany([
    {
      name: 'Administrador Geral',
      preferred_name: 'Administrador Geral',
      userNumber: '123456',
      email: 'admin@gmail.com',
      password: '$2a$12$.jkXS4kTtNL9hawpyI69s.GoqVU10SYM6A4s7wy7ae1ZGsMCml8Ai',
      campus: 'Nenhum',
      registrationCode: 'AZVDFDMR',
      type: 'ADMIN',
      status: 'ACTIVE'
    },
    {
      name: 'Marcelo Balt Souza',
      userNumber: '20198677125',
      campus: 'Salvador',
      registrationCode: 'ATOZUJYS',
      type: 'STUDENT'
    },
    {
      name: 'Bidget Narrie',
      userNumber: '20194247024',
      campus: 'Salvador',
      registrationCode: 'LGWEPKYJ',
      type: 'STUDENT'
    },
    {
      name: 'Ana Maria Melo',
      preferred_name: 'Emmet Soffu',
      userNumber: '481901',
      email: 'emmet@gmail.com',
      password: '$2a$12$.jkXS4kTtNL9hawpyI69s.GoqVU10SYM6A4s7wy7ae1ZGsMCml8A',
      campus: 'Salvador',
      registrationCode: 'UJBSXPKG',
      type: 'TEACHER',
      status: 'ACTIVE',
      teacher: {
        subjects: ['Geografia']
      }
    },
    {
      name: 'Eleonora Caseri',
      userNumber: '20197849382',
      campus: 'Salvador',
      registrationCode: 'KBHRDQEI',
      type: 'STUDENT'
    },
    {
      name: 'Farrell Pulley',
      userNumber: '20194155557',
      campus: 'Salvador',
      registrationCode: 'BDANQMCR',
      type: 'STUDENT'
    },
    {
      name: 'Ângela Silva Souza',
      userNumber: '076273',
      campus: 'Salvador',
      registrationCode: 'BJHYIDWZ',
      type: 'TEACHER'
    },
    {
      name: 'Fidel Vannah',
      userNumber: '932621',
      campus: 'Salvador',
      registrationCode: 'NXBSJRAY',
      type: 'TEACHER'
    },
    {
      name: 'Merola McCathay',
      userNumber: '20190524111',
      campus: 'Salvador',
      registrationCode: 'CIGOAXEZ',
      type: 'STUDENT'
    },
    {
      name: 'Arly Napoli',
      userNumber: '20199463369',
      campus: 'Salvador',
      registrationCode: 'PBADUSRZ',
      type: 'STUDENT'
    },
    {
      name: 'Pedro Cerqueira Mota',
      preferred_name: 'Pedro Mota',
      userNumber: '20d190058001',
      email: 'rafael_calvo@gmail.com',
      password: '$2a$12$.jkXS4kTtNL9hawpyI69s.GoqVU10SYM6A4s7wy7ae1ZGsMCml8Ai',
      campus: 'Salvador',
      registrationCode: 'YTHUUJIS',
      type: 'STUDENT',
      status: 'ACTIVE',
      student: {
        course: 'Automação Industrial (Integrado)',
        classNumber: '5822'
      }
    },
    {
      name: 'Kory Camfield',
      userNumber: '413649',
      campus: 'Salvador',
      registrationCode: 'FSQTLNPD',
      type: 'TEACHER'
    },
    {
      name: 'Alfi Ettritch',
      userNumber: '20197827547',
      campus: 'Salvador',
      registrationCode: 'XLICPWJY',
      type: 'STUDENT'
    },
    {
      name: 'Oona Ettery',
      userNumber: '20194237686',
      campus: 'Salvador',
      registrationCode: 'UGKRIEWZ',
      type: 'STUDENT'
    },
    {
      name: 'Esra Roz',
      userNumber: '20192711752',
      campus: 'Salvador',
      registrationCode: 'MNZFCABV',
      type: 'STUDENT'
    },
    {
      name: 'Emory Kidney',
      userNumber: '648619',
      campus: 'Salvador',
      registrationCode: 'DYBXAVRM',
      type: 'TEACHER'
    },
    {
      name: 'Luce Seebright',
      userNumber: '110064',
      campus: 'Salvador',
      registrationCode: 'VIRQGCDE',
      type: 'TEACHER'
    },
    {
      name: 'Frederico Pfiffer',
      userNumber: '20197547745',
      campus: 'Salvador',
      registrationCode: 'RFQVMNCL',
      type: 'STUDENT'
    },
    {
      name: 'Joleen Paris',
      userNumber: '20191475904',
      campus: 'Salvador',
      registrationCode: 'PXBCZQUA',
      type: 'STUDENT'
    },
    {
      name: 'Ofilia Blasli',
      userNumber: '20197268645',
      campus: 'Salvador',
      registrationCode: 'YEACOBUF',
      type: 'STUDENT'
    },
    {
      name: 'Remus Gynni',
      userNumber: '20199137581',
      campus: 'Salvador',
      registrationCode: 'SOUXGMEJ',
      type: 'STUDENT'
    },
    {
      name: 'Manon Westoff',
      userNumber: '378498',
      campus: 'Salvador',
      registrationCode: 'DGKSPZIJ',
      type: 'TEACHER'
    },
    {
      name: 'Carling Uttley',
      userNumber: '20196264471',
      campus: 'Salvador',
      registrationCode: 'DOFKJVXW',
      type: 'STUDENT'
    },
    {
      name: 'Meredithe Yewdale',
      userNumber: '20196500991',
      campus: 'Salvador',
      registrationCode: 'QUYWOLZS',
      type: 'STUDENT'
    },
    {
      name: 'Reinald Ilyasov',
      userNumber: '20199506247',
      campus: 'Salvador',
      registrationCode: 'JGLIQPAU',
      type: 'STUDENT'
    },
    {
      name: 'Annaliese Durston',
      userNumber: '20192255991',
      campus: 'Salvador',
      registrationCode: 'IWDSNTVF',
      type: 'STUDENT'
    },
    {
      name: 'Ewart Ambrogini',
      userNumber: '20196300205',
      campus: 'Salvador',
      registrationCode: 'GWRSETZH',
      type: 'STUDENT'
    },
    {
      name: 'Melisande Malpass',
      userNumber: '20194274676',
      campus: 'Salvador',
      registrationCode: 'HFEZQXIM',
      type: 'STUDENT'
    },
    {
      name: 'Dorey Golston',
      userNumber: '20199234438',
      campus: 'Salvador',
      registrationCode: 'UHIFGCQJ',
      type: 'STUDENT'
    },
    {
      name: 'Cate Havile',
      userNumber: '20193408295',
      campus: 'Salvador',
      registrationCode: 'YZRHTLJB',
      type: 'STUDENT'
    },
    {
      name: 'Edie Fairhall',
      userNumber: '20198197438',
      campus: 'Salvador',
      registrationCode: 'JZXPBRDW',
      type: 'STUDENT'
    },
    {
      name: 'Lucila Montier',
      userNumber: '20198911694',
      campus: 'Salvador',
      registrationCode: 'UFMQLJZN',
      type: 'STUDENT'
    },
    {
      name: 'Sam Maunders',
      userNumber: '20193156179',
      campus: 'Salvador',
      registrationCode: 'XLBTOHZU',
      type: 'STUDENT'
    },
    {
      name: 'Kaylee Grevatt',
      userNumber: '20198986914',
      campus: 'Salvador',
      registrationCode: 'ZTKVSFOX',
      type: 'STUDENT'
    },
    {
      name: 'Novelia Van Velden',
      userNumber: '374847',
      campus: 'Salvador',
      registrationCode: 'XIWBPDYQ',
      type: 'TEACHER'
    },
    {
      name: 'Ferne Maunders',
      userNumber: '20193807767',
      campus: 'Salvador',
      registrationCode: 'PNMEQCDS',
      type: 'STUDENT'
    },
    {
      name: 'Elnore Santen',
      userNumber: '20191539729',
      campus: 'Salvador',
      registrationCode: 'WEXIOMPJ',
      type: 'STUDENT'
    },
    {
      name: 'Brandy Billinge',
      userNumber: '20199797565',
      campus: 'Salvador',
      registrationCode: 'JCREYLNS',
      type: 'STUDENT'
    },
    {
      name: 'Gladys Hundey',
      userNumber: '069061',
      campus: 'Salvador',
      registrationCode: 'EVKOFHXZ',
      type: 'TEACHER'
    },
    {
      name: 'Alexandrina Witherington',
      userNumber: '20194733879',
      campus: 'Salvador',
      registrationCode: 'WYUJNHFZ',
      type: 'STUDENT'
    },
    {
      name: 'Konstance Nund',
      userNumber: '20199219020',
      campus: 'Salvador',
      registrationCode: 'HSTBYOEI',
      type: 'STUDENT'
    },
    {
      name: 'Tannie Iacovo',
      userNumber: '20191539262',
      campus: 'Salvador',
      registrationCode: 'SIUZQHCO',
      type: 'STUDENT'
    },
    {
      name: 'Coralie Wegner',
      userNumber: '20195273729',
      campus: 'Salvador',
      registrationCode: 'IESHKORF',
      type: 'STUDENT'
    },
    {
      name: 'Jerome Scapens',
      userNumber: '20196033823',
      campus: 'Salvador',
      registrationCode: 'YLOGPUMQ',
      type: 'STUDENT'
    },
    {
      name: 'Hedvige Skace',
      userNumber: '599185',
      campus: 'Salvador',
      registrationCode: 'TFARNUMY',
      type: 'TEACHER'
    },
    {
      name: 'Carroll Tabourin',
      userNumber: '20199456068',
      campus: 'Salvador',
      registrationCode: 'CJNGQBAS',
      type: 'STUDENT'
    },
    {
      name: 'Hildegaard Oller',
      userNumber: '20195671236',
      campus: 'Salvador',
      registrationCode: 'NVYTOKXR',
      type: 'STUDENT'
    },
    {
      name: 'Maxi Heddan',
      userNumber: '096376',
      campus: 'Salvador',
      registrationCode: 'HRLYINEQ',
      type: 'TEACHER'
    },
    {
      name: 'Julianne Ingilson',
      userNumber: '075318',
      campus: 'Salvador',
      registrationCode: 'GNTWQSEH',
      type: 'TEACHER'
    },
    {
      name: 'Lyndsay Reason',
      userNumber: '20198452347',
      campus: 'Salvador',
      registrationCode: 'SGYLCNIP',
      type: 'STUDENT'
    },
    {
      name: 'Barthel Tambling',
      userNumber: '20197768570',
      campus: 'Salvador',
      registrationCode: 'XUDAZNML',
      type: 'STUDENT'
    },
    {
      name: 'Janifer Carrett',
      userNumber: '432932',
      campus: 'Salvador',
      registrationCode: 'IALPHCOZ',
      type: 'TEACHER'
    },
    {
      name: 'Reeva Ciccottio',
      userNumber: '981134',
      campus: 'Salvador',
      registrationCode: 'JFNHGDOP',
      type: 'TEACHER'
    },
    {
      name: 'Billy Andrzej',
      userNumber: '20195155069',
      campus: 'Salvador',
      registrationCode: 'THOQAZCE',
      type: 'STUDENT'
    },
    {
      name: 'Gary Chevin',
      userNumber: '20195241950',
      campus: 'Salvador',
      registrationCode: 'BJGQHLUK',
      type: 'STUDENT'
    },
    {
      name: 'Maighdiln Axworthy',
      userNumber: '20190068583',
      campus: 'Salvador',
      registrationCode: 'CBZWYHMJ',
      type: 'STUDENT'
    },
    {
      name: 'Elisha Hadingham',
      userNumber: '488509',
      campus: 'Salvador',
      registrationCode: 'PKUVZBIL',
      type: 'TEACHER'
    },
    {
      name: 'Shanda Vagges',
      userNumber: '288012',
      campus: 'Salvador',
      registrationCode: 'EAGJXFSP',
      type: 'TEACHER'
    },
    {
      name: 'Washington Shoebrook',
      userNumber: '524397',
      campus: 'Salvador',
      registrationCode: 'XQLUFDHZ',
      type: 'TEACHER'
    },
    {
      name: 'Penrod Backs',
      userNumber: '20193635340',
      campus: 'Salvador',
      registrationCode: 'CHGJTMEV',
      type: 'STUDENT'
    },
    {
      name: 'Aloysia Gazey',
      userNumber: '20192844368',
      campus: 'Salvador',
      registrationCode: 'FROKIHNG',
      type: 'STUDENT'
    },
    {
      name: 'Engelbert Boniface',
      userNumber: '20193069253',
      campus: 'Salvador',
      registrationCode: 'LITAQUGW',
      type: 'STUDENT'
    },
    {
      name: 'Bibi Brothwell',
      userNumber: '20193073549',
      campus: 'Salvador',
      registrationCode: 'BPRIMCJS',
      type: 'STUDENT'
    },
    {
      name: 'Melloney Ogger',
      userNumber: '018654',
      campus: 'Salvador',
      registrationCode: 'ZHLKSITN',
      type: 'TEACHER'
    },
    {
      name: 'Dedie Janew',
      userNumber: '20191701516',
      campus: 'Salvador',
      registrationCode: 'VHNRZPXI',
      type: 'STUDENT'
    },
    {
      name: 'Eada Barke',
      userNumber: '363399',
      campus: 'Salvador',
      registrationCode: 'KUMZSJEN',
      type: 'TEACHER'
    },
    {
      name: 'Gabriel Xitado Oliveira',
      preferred_name: 'Gabriel Xitado',
      userNumber: '20190058001',
      email: 'pedrocerqueiramota@hotmail.com',
      password: '$2b$12$/0cQfn4NwnoNl94.u7dNcufJJhQIiqaN4Vz.Z53DcEdWdGjFcuv6e',
      campus: 'Salvador',
      registrationCode: 'BZRVPGNJ',
      type: 'STUDENT',
      status: 'ACTIVE',
      student: {
        course: 'Automação Industrial (Integrado)',
        classNumber: '5821'
      }
    },
    {
      name: 'Karee Moscone',
      userNumber: '20199309655',
      campus: 'Salvador',
      registrationCode: 'NDGMXWQC',
      type: 'STUDENT'
    },
    {
      name: 'Ave Grebner',
      userNumber: '661807',
      campus: 'Salvador',
      registrationCode: 'RXFTQKMA',
      type: 'TEACHER'
    },
    {
      name: 'Daron Felgate',
      userNumber: '928708',
      campus: 'Salvador',
      registrationCode: 'CKLPUMIX',
      type: 'TEACHER'
    },
    {
      name: 'Rosemary Lydford',
      userNumber: '20194098793',
      campus: 'Salvador',
      registrationCode: 'VRKMUEBN',
      type: 'STUDENT'
    },
    {
      name: 'Kelsey Pautard',
      userNumber: '20192584089',
      campus: 'Salvador',
      registrationCode: 'XOFGBRJN',
      type: 'STUDENT'
    },
    {
      name: 'Meryl Tanguy',
      userNumber: '20193017733',
      campus: 'Salvador',
      registrationCode: 'NKTVCPBJ',
      type: 'STUDENT'
    },
    {
      name: 'Penni Boerderman',
      userNumber: '636025',
      campus: 'Salvador',
      registrationCode: 'DSYPCVFN',
      type: 'TEACHER'
    },
    {
      name: 'Ramon Carlyle',
      userNumber: '20194117473',
      campus: 'Salvador',
      registrationCode: 'TMWUXSQE',
      type: 'STUDENT'
    },
    {
      name: 'Arlen Carlyon',
      userNumber: '930243',
      campus: 'Salvador',
      registrationCode: 'QKMIPFGN',
      type: 'TEACHER'
    },
    {
      name: 'Ariela Edmead',
      userNumber: '20199653144',
      campus: 'Salvador',
      registrationCode: 'EZJDFOLS',
      type: 'STUDENT'
    },
    {
      name: 'Harriett McGreay',
      userNumber: '20194041277',
      campus: 'Salvador',
      registrationCode: 'NYQEXUAB',
      type: 'STUDENT'
    },
    {
      name: 'Wynn Fagg',
      userNumber: '20197643816',
      campus: 'Salvador',
      registrationCode: 'BGARUYMO',
      type: 'STUDENT'
    },
    {
      name: 'Torrance Viger',
      userNumber: '074444',
      campus: 'Salvador',
      registrationCode: 'MIBCTENY',
      type: 'TEACHER'
    },
    {
      name: 'Grissel MacCroary',
      userNumber: '20198639004',
      campus: 'Salvador',
      registrationCode: 'BEPKFLAX',
      type: 'STUDENT'
    },
    {
      name: 'Rhianna Kirman',
      userNumber: '20194758375',
      campus: 'Salvador',
      registrationCode: 'YTGWJQXR',
      type: 'STUDENT'
    },
    {
      name: 'Maurizia Skoggings',
      userNumber: '20199818508',
      campus: 'Salvador',
      registrationCode: 'WFYCDROV',
      type: 'STUDENT'
    },
    {
      name: 'Buiron Baudin',
      userNumber: '588894',
      campus: 'Salvador',
      registrationCode: 'IVEUOZPJ',
      type: 'TEACHER'
    },
    {
      name: 'Sybille Guice',
      userNumber: '20190318660',
      campus: 'Salvador',
      registrationCode: 'LTRIOFCW',
      type: 'STUDENT'
    },
    {
      name: 'Joya Reddick',
      userNumber: '964070',
      campus: 'Salvador',
      registrationCode: 'XDCGVMYS',
      type: 'TEACHER'
    },
    {
      name: 'Rana McGloin',
      userNumber: '514282',
      campus: 'Salvador',
      registrationCode: 'PLHGJODV',
      type: 'TEACHER'
    },
    {
      name: 'Rorke Shillom',
      userNumber: '368353',
      campus: 'Salvador',
      registrationCode: 'XNWDGASL',
      type: 'TEACHER'
    },
    {
      name: 'Burnard Kentish',
      userNumber: '756312',
      campus: 'Salvador',
      registrationCode: 'CIDWRGTJ',
      type: 'TEACHER'
    },
    {
      name: 'Wynnie Jahnel',
      userNumber: '20190597395',
      campus: 'Salvador',
      registrationCode: 'SZYVXTNF',
      type: 'STUDENT'
    },
    {
      name: 'Michel Adnet',
      userNumber: '20191351654',
      campus: 'Salvador',
      registrationCode: 'DWJEHORA',
      type: 'STUDENT'
    },
    {
      name: 'Codi Worgan',
      userNumber: '20192655248',
      campus: 'Salvador',
      registrationCode: 'NEKZBJQY',
      type: 'STUDENT'
    },
    {
      name: 'Germain Owen',
      userNumber: '20190088728',
      campus: 'Salvador',
      registrationCode: 'RGQHPKAW',
      type: 'STUDENT'
    },
    {
      name: 'Moll Wither',
      userNumber: '20195920392',
      campus: 'Salvador',
      registrationCode: 'OULNGJKF',
      type: 'STUDENT'
    },
    {
      name: 'Neala Woffenden',
      userNumber: '20192690846',
      campus: 'Salvador',
      registrationCode: 'EQWRKNDC',
      type: 'STUDENT'
    },
    {
      name: 'Claiborn Zima',
      userNumber: '598548',
      campus: 'Salvador',
      registrationCode: 'PJURVIYG',
      type: 'TEACHER'
    },
    {
      name: 'Glenine Rogers',
      userNumber: '329387',
      campus: 'Salvador',
      registrationCode: 'CQPLFBID',
      type: 'TEACHER'
    },
    {
      name: 'Kelley Nise',
      userNumber: '058171',
      campus: 'Salvador',
      registrationCode: 'UWSGMNKA',
      type: 'TEACHER'
    },
    {
      name: 'Daisi Ternent',
      userNumber: '311673',
      campus: 'Salvador',
      registrationCode: 'HRCIKGWF',
      type: 'TEACHER'
    },
    {
      name: 'Jenn Sargeaunt',
      userNumber: '797428',
      campus: 'Salvador',
      registrationCode: 'VFNPKYIL',
      type: 'TEACHER'
    },
    {
      name: 'Jo ann Waddington',
      userNumber: '20196929334',
      campus: 'Salvador',
      registrationCode: 'YUGJAHSX',
      type: 'STUDENT'
    },
    {
      name: 'Cherilynn Gouch',
      userNumber: '765203',
      campus: 'Salvador',
      registrationCode: 'NMZHDCYF',
      type: 'TEACHER'
    },
    {
      name: 'Windham Faas',
      userNumber: '699933',
      campus: 'Salvador',
      registrationCode: 'RTFAOEUZ',
      type: 'TEACHER'
    },
    {
      name: 'Dov Tenny',
      userNumber: '20194833944',
      campus: 'Salvador',
      registrationCode: 'ZRNCYPXE',
      type: 'STUDENT'
    },
    {
      name: 'Robbi Harris',
      userNumber: '674022',
      campus: 'Salvador',
      registrationCode: 'PVIZFDLJ',
      type: 'TEACHER'
    },
    {
      name: 'Hansiain Litt',
      userNumber: '20190854805',
      campus: 'Salvador',
      registrationCode: 'QFYTWGON',
      type: 'STUDENT'
    },
    {
      name: 'Fianna Byres',
      userNumber: '20199855139',
      campus: 'Salvador',
      registrationCode: 'FOZHADEQ',
      type: 'STUDENT'
    },
    {
      name: 'Marianne Blockey',
      userNumber: '726905',
      campus: 'Salvador',
      registrationCode: 'UDIREBCQ',
      type: 'TEACHER'
    },
    {
      name: 'Lilas Meynell',
      userNumber: '20190547059',
      campus: 'Salvador',
      registrationCode: 'BREKGIQW',
      type: 'STUDENT'
    },
    {
      name: 'Sula Tremeer',
      userNumber: '20199303952',
      campus: 'Salvador',
      registrationCode: 'OHZKGDBS',
      type: 'STUDENT'
    },
    {
      name: 'Ed Penas',
      userNumber: '20198254352',
      campus: 'Salvador',
      registrationCode: 'VZHTDLXN',
      type: 'STUDENT'
    },
    {
      name: 'Chris Goricke',
      userNumber: '20198284594',
      campus: 'Salvador',
      registrationCode: 'NXZFUBAY',
      type: 'STUDENT'
    },
    {
      name: 'Ezmeralda Hiddersley',
      userNumber: '797887',
      campus: 'Salvador',
      registrationCode: 'FUQCROBW',
      type: 'TEACHER'
    },
    {
      name: 'Felizio Cregan',
      userNumber: '20192653652',
      campus: 'Salvador',
      registrationCode: 'SAZGQKNF',
      type: 'STUDENT'
    },
    {
      name: 'Kelila Battle',
      userNumber: '20198405534',
      campus: 'Salvador',
      registrationCode: 'MHLBJDXG',
      type: 'STUDENT'
    },
    {
      name: 'Bowie Winram',
      userNumber: '20198598925',
      campus: 'Salvador',
      registrationCode: 'CDNTOWMV',
      type: 'STUDENT'
    },
    {
      name: 'Nixie Ruffles',
      userNumber: '20197508436',
      campus: 'Salvador',
      registrationCode: 'MGSCBUKZ',
      type: 'STUDENT'
    },
    {
      name: 'Faustine Tolussi',
      userNumber: '20190179078',
      campus: 'Salvador',
      registrationCode: 'CRHXFMDW',
      type: 'STUDENT'
    },
    {
      name: 'Cicily Carnegie',
      userNumber: '144185',
      campus: 'Salvador',
      registrationCode: 'EBZWDLRS',
      type: 'TEACHER'
    },
    {
      name: 'Melisse McLernon',
      userNumber: '20198249723',
      campus: 'Salvador',
      registrationCode: 'TQZKEMYH',
      type: 'STUDENT'
    },
    {
      name: 'Sargent Connolly',
      userNumber: '716866',
      campus: 'Salvador',
      registrationCode: 'YFQRNGAL',
      type: 'TEACHER'
    },
    {
      name: 'Solomon Longhi',
      userNumber: '20198171284',
      campus: 'Salvador',
      registrationCode: 'GSXIZYWC',
      type: 'STUDENT'
    },
    {
      name: 'Lynea Braksper',
      userNumber: '20195981293',
      campus: 'Salvador',
      registrationCode: 'OVWLDIXA',
      type: 'STUDENT'
    },
    {
      name: 'Rafael Ovett',
      userNumber: '20191675095',
      campus: 'Salvador',
      registrationCode: 'OXIERYWN',
      type: 'STUDENT'
    },
    {
      name: 'Rockwell Maccaig',
      userNumber: '504151',
      campus: 'Salvador',
      registrationCode: 'YVBPHGST',
      type: 'TEACHER'
    },
    {
      name: 'Patton Gillooly',
      userNumber: '20193816460',
      campus: 'Salvador',
      registrationCode: 'EHKZRMFQ',
      type: 'STUDENT'
    },
    {
      name: 'Iseabal De Haven',
      userNumber: '461644',
      campus: 'Salvador',
      registrationCode: 'TQXUEMFI',
      type: 'TEACHER'
    },
    {
      name: 'Maxie McGrill',
      userNumber: '20198614793',
      campus: 'Salvador',
      registrationCode: 'HVABYDSP',
      type: 'STUDENT'
    },
    {
      name: 'Erika Spere',
      userNumber: '20192482578',
      campus: 'Salvador',
      registrationCode: 'IZPXKEUT',
      type: 'STUDENT'
    },
    {
      name: 'Sly Brigman',
      userNumber: '20191953499',
      campus: 'Salvador',
      registrationCode: 'CJDWBEQK',
      type: 'STUDENT'
    },
    {
      name: 'Amelie Diver',
      userNumber: '20193310869',
      campus: 'Salvador',
      registrationCode: 'HIJBRXTZ',
      type: 'STUDENT'
    },
    {
      name: 'Junette Gyde',
      userNumber: '372138',
      campus: 'Salvador',
      registrationCode: 'OAZWKMRC',
      type: 'TEACHER'
    },
    {
      name: 'Niki Orringe',
      userNumber: '20193899527',
      campus: 'Salvador',
      registrationCode: 'GWZUVBRK',
      type: 'STUDENT'
    },
    {
      name: 'Ximenez Leadley',
      userNumber: '20197769103',
      campus: 'Salvador',
      registrationCode: 'QYKHGFAM',
      type: 'STUDENT'
    },
    {
      name: 'Silvan Dunkley',
      userNumber: '20196508501',
      campus: 'Salvador',
      registrationCode: 'CLKIQDYT',
      type: 'STUDENT'
    },
    {
      name: 'Renault Cunah',
      userNumber: '487287',
      campus: 'Salvador',
      registrationCode: 'ABVGJTEF',
      type: 'TEACHER'
    },
    {
      name: 'Webster McAuley',
      userNumber: '088607',
      campus: 'Salvador',
      registrationCode: 'MPYODBKQ',
      type: 'TEACHER'
    },
    {
      name: 'Leland Godfrey',
      userNumber: '514654',
      campus: 'Salvador',
      registrationCode: 'FZVSLDMG',
      type: 'TEACHER'
    },
    {
      name: 'Allard Upstone',
      userNumber: '20195129713',
      campus: 'Salvador',
      registrationCode: 'SQNZWBRV',
      type: 'STUDENT'
    },
    {
      name: 'Carr Drewett',
      userNumber: '20196770738',
      campus: 'Salvador',
      registrationCode: 'KMOCGZUN',
      type: 'STUDENT'
    },
    {
      name: 'Friedrich Aiston',
      userNumber: '362520',
      campus: 'Salvador',
      registrationCode: 'ROZGNUVP',
      type: 'TEACHER'
    },
    {
      name: 'Pat Bibbie',
      userNumber: '20190799055',
      campus: 'Salvador',
      registrationCode: 'MNCWFTKE',
      type: 'STUDENT'
    },
    {
      name: 'Rikki Domonkos',
      userNumber: '20195056597',
      campus: 'Salvador',
      registrationCode: 'ICJAUWOH',
      type: 'STUDENT'
    },
    {
      name: 'Elayne Rattrie',
      userNumber: '20197191884',
      campus: 'Salvador',
      registrationCode: 'AMSGFNLT',
      type: 'STUDENT'
    },
    {
      name: 'Lynnell Twining',
      userNumber: '20195804329',
      campus: 'Salvador',
      registrationCode: 'MEBVGSUT',
      type: 'STUDENT'
    },
    {
      name: 'Tawnya Tomadoni',
      userNumber: '20199808084',
      campus: 'Salvador',
      registrationCode: 'VSENXPLT',
      type: 'STUDENT'
    },
    {
      name: 'Cherianne Riches',
      userNumber: '20193005012',
      campus: 'Salvador',
      registrationCode: 'VKRBNHFP',
      type: 'STUDENT'
    },
    {
      name: 'Bernie Lofthouse',
      userNumber: '966336',
      campus: 'Salvador',
      registrationCode: 'OQHIBPUR',
      type: 'TEACHER'
    }
  ])

  mongoose.connection.close()

  console.info(dedent(`
    ${chalk.green('[Server]')} Seed executada com sucesso!
  `))
}))()
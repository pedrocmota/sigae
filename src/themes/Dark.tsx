import {DefaultTheme} from 'styled-components'

const Dark: DefaultTheme = {
  title: 'Dark',
  global: {
    selection: {
      background: '#88a4e6',
      foreground: '#f0f8ff'
    },
    scrollbar: {
      track: {
        background: '#424242',
        foreground: '#F0F0F0'
      },
      thumb: {
        background: '#999999',
        hover: '#7B7B7B'
      }
    },
    tooltip: {
      background: '#4e5f78',
      foreground: '#ffffff'
    },
    menu: {
      background: '#333642',
      foreground: '#f8f9fc',
      selected: {
        background: '#6f7ace',
        foreground: '#ffffff'
      }
    }
  },
  components: {
    loading: {
      background: '#404447'
    },
    console: {
      background: '#181818',
      topBar: {
        background: '#272626',
        foreground: '#f5f5f5'
      },
      collapsible: {
        selectBackground: '#252222',
        error: '#fe4b6e',
        warning: '#ffcd8c',
        msg: '#f5f5f5',
        arrow: '#8597b3'
      },
      emptyText: '#f5f5f5'
    },
    popup: {
      background: '#1f222a',
      foreground: '#fdfdfd',
      title: '#ffffff',
      okButton: {
        background: '#1976d2',
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
      background: '#13181f',
      sigae: '#ccdcff',
      copyright: '#ffffff',
      link: '#44dd68',
      linkHover: '#38c058'
    },
    button: {
      primary: {
        background: '#1976d2',
        foreground: '#ffffff',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledForeground: '#ffffff'
      },
      red: {
        background: '#e95751',
        foreground: '#ffffff',
        disabledBackground: 'rgba(0, 0, 0, 0.32)',
        disabledForeground: '#ffffff'
      }
    },
    loginInput: {
      background: '#1f222a',
      foreground: '#f8f9fc',
      border: '#474b5c',
      borderHover: '#a0bbe2',
      borderFocus: '#a3a1ff',
      inputPlaceholder: '#d7dbe9',
      disabledBackground: '#3f4657',
      errorBorder: '#e44a4a',
      errorBorderHover: '#f36161',
      errorBorderFocus: '#f36161',
      placeholderBackgroundStart: '#1f222a',
      placeholderBackgroundEnd: '#1f222a',
      placeholderForeground: '#dadada'
    },
    primaryInput: {
      background: '#333642',
      foreground: '#f8f9fc',
      placeholder: '#f8f9fc',
      caret: '#f8f9fc',
      border: '#474b5c',
      borderHover: '#7b91b3',
      borderFocus: '#a3a1ff',
      disabled: {
        background: '#1d2029',
        foreground: '#f8f9fc'
      }
    },
    pinInput: {
      background: '#2e3138',
      foreground: '#f8f9fc',
      caret: '#4982d6',
      border: '#2e3138',
      borderFocus: '#4982d6',
      placeholder: '#f8f9fc',
      placeholderFocus: '#4982d6'
    },
    select: {
      popup: {
        background: '#333642',
        foreground: '#f8f9fc',
        backgroundFocus: 'rgba(255, 255, 255, 0.065)',
        foregroundFocus: '#f8f9fc',
        backgroundSelected: '#6f7ace',
        foregroundSelected: '#ffffff'
      }
    },
    showPassword: {
      background: '#afb9c2',
      backgroundSelected: '#9593ff'
    },
    inputErrorIcon: {
      color: '#ff2b55'
    },
    buttonSpinner: {
      color: '#ffffff'
    },
    passwordPopup: {
      background: '#333642',
      foreground: '#ffffff',
      border: '#3a3d4b',
      title: '#e6e6e6',
      colorBar: {
        background: '#acece6',
        foreground: '#26a69a'
      },
      colors: {
        bad: '#ef5e5e',
        medium: '#ebdc5d',
        good: '#3bc458'
      }
    }
  },
  pages: {
    login: {
      gradient: {
        start: '#181d27',
        end: '#181d27'
      },
      container: '#1f222a',
      title: '#f8f9fc',
      links: {
        foreground: '#f8f9fc',
        foregroundHover: '#b8b7fd',
        foregroundAfter: '#b8b7fd'
      },
      footer: {
        background: '#2a2e3a',
        foreground: '#f8f9fc',
        link: {
          foreground: '#8ae08a',
          foregroundHover: '#69dd69'
        }
      }
    },
    register: {
      code: {
        background: '#1f222a',
        title: '#f8f9fc'
      },
      form: {
        background: '#1f222a',
        title: '#f8f9fc',
        header: '#f8f9fc',
        banner: {
          background: '#272b33',
          color: '#ffffff'
        }
      },
      validation: {
        background: '#1f222a',
        title: '#f8f9fc'
      }
    },
    code: {
      gradient: {
        start: '#181d27',
        end: '#181d27'
      },
      container: '#1f222a',
      title: '#f8f9fc',
      invalid: '#f8f9fc'
    },
    notFound: {
      background: '#1f222a',
      foreground: '#f8f9fc'
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
        background: '#212429',
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
        background: '#2f323b',
        color: '#5c66bc',
        hover: '#8d98f3'
      }
    }
  },
  popups: {
  }
}

export default Dark
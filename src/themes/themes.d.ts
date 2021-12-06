import 'styled-components'

declare global {
  export type themes = 'light' | 'dark'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    global: {
      selection: {
        background: string,
        foreground: string
      },
      scrollbar: {
        track: {
          background: string,
          foreground: string
        },
        thumb: {
          background: string,
          hover: string
        }
      },
      tooltip: {
        background: string,
        foreground: string
      },
      menu: {
        background: string,
        foreground: string,
        selected: {
          background: string,
          foreground: string
        }
      }
    },
    components: {
      loading: {
        background: string
      },
      console: {
        background: string,
        topBar: {
          background: string,
          foreground: string
        },
        collapsible: {
          selectBackground: string,
          error: string,
          warning: string,
          msg: string,
          arrow: string
        },
        emptyText: string
      },
      popup: {
        background: string,
        foreground: string,
        title: string,
        okButton: {
          background: string,
          foreground: string,
          disabled: {
            background: string,
            foreground: string
          }
        },
        cancelButton: {
          background: string,
          foreground: string,
          disabled: {
            background: string,
            foreground: string
          }
        }
      },
      footer: {
        background: string,
        sigae: string,
        copyright: string,
        link: string,
        linkHover: string
      },
      button: {
        primary: {
          background: string,
          foreground: string,
          disabledBackground: string,
          disabledForeground: string
        }
      },
      loginInput: {
        background: string,
        foreground: string,
        border: string,
        borderHover: string,
        borderFocus: string,
        inputPlaceholder: string,
        disabledBackground: string,
        errorBorder: string,
        errorBorderHover: string,
        errorBorderFocus: string,
        placeholderBackgroundStart: string,
        placeholderBackgroundEnd: string,
        placeholderForeground: string
      },
      primaryInput: {
        background: string,
        foreground: string,
        placeholder: string,
        caret: string,
        border: string,
        borderHover: string,
        borderFocus: string,
        disabled: {
          background: string,
          foreground: string
        }
      },
      pinInput: {
        background: string,
        foreground: string,
        caret: string,
        border: string,
        borderFocus: string,
        placeholder: string,
        placeholderFocus: string
      },
      select: {
        popup: {
          background: string,
          foreground: string,
          backgroundFocus: string,
          foregroundFocus: string,
          backgroundSelected: string,
          foregroundSelected: string
        }
      },
      showPassword: {
        background: string,
        backgroundSelected: string
      },
      inputErrorIcon: {
        color: string
      },
      buttonSpinner: {
        color: string
      },
      passwordPopup: {
        background: string,
        foreground: string,
        border: string,
        title: string,
        colorBar: {
          background: string,
          foreground: string
        },
        colors: {
          bad: string,
          medium: string,
          good: string
        }
      }
    },
    pages: {
      login: {
        gradient: {
          start: string,
          end: string
        },
        container: string,
        title: string,
        links: {
          foreground: string,
          foregroundHover: string,
          foregroundAfter: string
        },
        footer: {
          background: string,
          foreground: string,
          link: {
            foreground: string,
            foregroundHover: string
          }
        }
      },
      register: {
        code: {
          background: string,
          title: string
        },
        form: {
          background: string,
          title: string,
          header: string,
          banner: {
            background: string,
            color: string
          }
        },
        validation: {
          background: string,
          title: string
        }
      },
      code: {
        gradient: {
          start: string,
          end: string
        },
        container: string,
        title: string,
        invalid: string
      },
      notFound: {
        background: string,
        foreground: string
      }
    },
    popups: {
      loading: {
        spinner: string
      }
    }
  }
}
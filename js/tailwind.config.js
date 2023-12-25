tailwind.config = {
    theme: {
      extend: {
        // Color Var Start
        colors: {
            headerColor: 'rgba(22, 12, 109, 0.50)',
            hoverColor: '#1BBF00',
            menuColor: '#EFF4FA',
            bennarOverly: 'rgba(106, 98, 197, 0.90)',
            textColor:'#E6E5F3',
            buttonText: '#FFF',
            bgp: '#141135',
            whychooseus: '#726E9E',
            whyChooseUs: '#141135',
            whyChooseUs2: '#F9F9F9',
            card: '#6B62C5',
            cardBg: 'rgba(255, 255, 255, 0.30)',
            cardText: '#F4F4F5',

        },
        // Color Var End

        // Header Container Start
        width: {
            Container: '1170px',
          },
        // Header Container End

        // Font
        fontFamily: {
            Nunito: ['Nunito Sans', 'sans-serif'],
            Open: ['Open Sans', 'sans-serif'],
            Paprika: ['Paprika', 'cursive'],
          },

          fontWeight: {
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
          },

          fontSize: {
            sm: '18px',
          },
        // Font

        // BG Image
        backgroundImage: {
            bgImage: "url('./image/image.png')",
            bg: "url('./image/bg.png')",
            whyChoseUsBg: "url('./image/bg3.png')",
            whatWeDo: "url('./image/bg4.png')"
          },
        // BG Image

        // lin hight
        lineHeight: {
            lineHight: '40px',
          }
        // lin hight
      }
    }
  }
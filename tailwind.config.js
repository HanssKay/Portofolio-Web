/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily:{
        'sans':['montserrat']
      },
      fontSize:{
        xs:'14px',
      },
      height:{
        '99':'30rem',
        '97':'18rem',
        '100' : '45rem',
        '101': '50rem',
        '102':'55rem',
        '103':'36rem',
      },
      spacing:{
        '100':'75rem',
        '97':'43rem',
        '98':'33rem',
        '99':'65rem',
        '23':'70px',
        '65':'300px',
        '66':'340px',
        '81':'21rem',
      },
        margin:{
          '25':'97px',
          // '0' :'-65px',
          '23':'96px'
        },
      animation: {
        'shake':'shake 7s linear infinite',
        'bounce': 'bounce 7s linear infinite',
        'splash': 'splash 3s linear infinite',
        // 'bounce-linear': 'bounce 8s linear infinite',
        'wiggle' : 'wiggle 5s linear infinite'
      },
      keyframes:{
        'bounce' :{
        '0%, 100%':{'transform': 'translateX(-2%)'},
        '50%': { 'transform':'translateY(2%)'},
      },
      'shake':{
        '0%, 100%':{'transform': 'translateY(-2%)'},
        '50%': { 'transform':'translateX(1%)'},
      },
      'wiggle': {
        '0%, 100%': { 'transform': 'rotate(-10deg)' },
        '50%': { 'transform': 'rotate(6deg)' },}
    },
      rotate :{
        '190':'190deg',
        '320':'320deg',
      },
      colors:{
        'primary': '#FFBF61',
        'one' :'#8EACCD',
        'second': '#00539C',
        'tree' : '#8E7E20'
      },
      dropShadow:{
        '2xl': '0 0px 25px rgba(3, 0, 0, 0.85)',
        '3xl': '1px 13px 5px rgba(0, 83, 156, 0.85)',
        '4xl': '0px 10px 10px rgba(255, 191, 97, 1)',
      },
    },
  },
  plugins: [],
};


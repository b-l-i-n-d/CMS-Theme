module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                ubuntu: "'Ubuntu', sans-serif",
            },

			colors: {
				primary: '#FE2638',
				secondary: '#EBB308',
			},

            width: {
               "1/2-4": "calc(50% - 16px)",
               "1/3-4": "calc(33% - 16px)",
               "2/3-4": "calc(66% - 16px)",
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            width: ['hover']
        },
    },
    plugins: [],
};

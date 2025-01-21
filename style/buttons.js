
export default {
    ".btn-primary" : {
        "background": "var(--primary)",
        "border": "1px solid var(--primary)",
        "padding": "0.25rem 1rem",
        "border-radius": "0.375rem",
        "color": "var(--mono-100)",
        "&:hover": {
            "color": "var(--primary)",
            "background": "var(--mono-100)",
        }
    },

    '.btn-primary-disabled' : {
        background: 'var(--primary)',
        border: '1px solid var(--primary)',
        padding: '0.25rem 1rem',
        'border-radius': '0.375rem',
        color: 'var(--mono-100)',
        cursor: 'not-allowed',
        opacity: '0.8'
    },

    '.btn-secondary' : {
        background: 'var(--mono-100)',
        border: '1px solid var(--primary)',
        padding: '0.25rem 1rem',
        'border-radius': '0.375rem',
        color: 'var(--primary)',
        '&:hover': {
            color: 'var(--mono-100)',
            background: 'var(--primary)'
        }
    },

    '.btn-secondary-disabled' : {
        background: 'var(--mono-200)',
        border: '1px solid var(--primary)',
        padding: '0.25rem 1rem',
        'border-radius': '0.375rem',
        color: 'var(--primary)',
        cursor: 'not-allowed',
        opacity: '0.8'
    }


}

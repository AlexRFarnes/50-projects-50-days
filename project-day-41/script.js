const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            if(idx === codes.length - 1) {
                // If this is the last position then there is no further input to jump to
                return;
            }
            setTimeout(()=>codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace' && idx >= 0 && e.target.value === '') {
            // If this is not the first input and the input is not empty then go back one input
            setTimeout(()=>codes[idx - 1].focus(), 10)

        }
    })
})

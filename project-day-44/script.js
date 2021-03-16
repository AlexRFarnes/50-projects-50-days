const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value  = parseInt(e.target.value);
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(e.target.nextElementSibling).getPropertyValue('width');

    const range_num = +range_width.substr(0, range_width.length - 2)
    const label_num = +label_width.substr(0, label_width.length - 2)
    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (range_num / max) - (label_num / 2) + scale(value, min, max, 10, -10); // scale(value, min, max, 10, -10) this accounts for the approx 10 pixels offcenter when getting to the extremes

    console.log(left)

    label.innerText = value;
    label.style.left = left + 'px';
    
})


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

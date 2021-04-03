const mobileNav = document.querySelector('.mobile-nav');
const nav = document.querySelector('.nav-btns');

const navSlide = () => {
    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
})  
}

navSlide();

window.onload = document.querySelector('.ordering-div-content').style.display = 'none',
    document.getElementById('message-res').style.display = 'none',
    document.querySelector('.checkout_div').style.display = 'none';

let mediumDisplay = document.querySelector('.medium-frame-img').style, 
    smallDisplay = document.querySelector('.small-frame-img').style,
    largeDisplay = document.querySelector('.large-frame-img').style,
    ImgTitle = document.getElementById('img-title'),
    ImgLocation = document.getElementById('loc-value'),
    smallSize = document.getElementById('small-size'),
    mediumSize = document.getElementById('medium-size'),
    largeSize = document.getElementById('large-size'),
    term_conds_checkbox = document.getElementById('terms-conds-checkbox'),
    checkout_btn = document.getElementById('checkout-btn'),
    total_money = document.getElementById('checkout-val'),
    selectedSize, div_on_display = '.top-div',
    table_title_td = document.getElementById('table_img_title'),
    table_size_td = document.getElementById('table_img_size'),
    table_amount_td = document.getElementById('table_img_amount'),
    min_label = document.getElementById('min_label'),
    no_of_l_copies, no_of_m_copies, no_of_s_copies;

const imagesArray = [
    {
        title: 'Sunset over Muhabura',
        location: 'Burera',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444587/image-rwanda/Burera_cmtxkg.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653527/image-rwanda/sunset_over_muhabura_large_te7g6s.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653529/image-rwanda/sunset_over_muhabura_medium_p3pewr.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653528/image-rwanda/sunset_over_muhabura_small_n3rq3o.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Gisovu Tree',
        location: 'Gisovu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616498320/image-rwanda/Gisovu_Tree_-_Gisovu_rz0kix.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653520/image-rwanda/gisovu_tree_large_h7id8k.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653520/image-rwanda/gisovu_tree_medium_ehinyx.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653521/image-rwanda/gisovu_tree_small_pclplu.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Intore',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444593/image-rwanda/UbumuntuArts2_bvzlcf.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653521/image-rwanda/intore_large_myhrvo.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653521/image-rwanda/intore_medium_qrb5aj.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653521/image-rwanda/intore_small_uv0qe2.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Flying in the dark',
        location: 'Burera',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444580/image-rwanda/burerabirds_1_1_p0dlfx.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653518/image-rwanda/fly_in_darkness_large_kwlvce.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653519/image-rwanda/fly_in_darkness_medium_kkfi8w.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653523/image-rwanda/fly_in_darkness_small_ctcmgj.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'The Island Sunset',
        location: 'Karongi',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444587/image-rwanda/Exhibition3_x6t5ci.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653522/image-rwanda/island_sunset_large_dzkuzq.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653522/image-rwanda/island_sunset_medium_t34s6s.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653524/image-rwanda/island_sunset_small_mgynds.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Misty landscape',
        location: 'Musanze',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444591/image-rwanda/mistylandscape_k5sthu.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653524/image-rwanda/misty_landscape_large_sfjoyd.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653524/image-rwanda/misty_landscape_medium_b2xfi0.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653523/image-rwanda/misty_landscape_small_r9jig6.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Sunset Over Prime Cement',
        location: 'Musanze',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444590/image-rwanda/portrait_nvmftl.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653527/image-rwanda/sunset_over_prime_cement_large_zjlaky.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653527/image-rwanda/sunset_over_prime_cement_medium_shic4v.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653529/image-rwanda/sunset_over_prime_cement_small_ebvtir.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Anti-Corruption Sculpture',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444589/image-rwanda/KCC_bosnwv.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653518/image-rwanda/anti_corruption_sculpture_large_ejrxhy.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653517/image-rwanda/anti_corruption_sculpture_medium_taq5et.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653517/image-rwanda/anti_corruption_sculpture_small_p4vafq.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'The Heavy Rain Lake',
        location: 'Nyabihu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444592/image-rwanda/reflection_gfp4go.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653525/image-rwanda/reflection_large_vjkxls.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653527/image-rwanda/reflection_medium_jfvovq.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653526/image-rwanda/reflection_small_j2brkl.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'Stary Night',
        location: 'Rusiga',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616498319/image-rwanda/Stary_Night-rusiga_1_fdgf61.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653526/image-rwanda/stary_night_large_jbq3ja.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653526/image-rwanda/stary_night_medium_wto5dt.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653528/image-rwanda/stary_night_small_xilogn.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },

    {
        title: 'Under umbrella',
        location: 'Nyabihu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444586/image-rwanda/bw_portait_1_h8diwy.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653530/image-rwanda/under_umbrella_large_nrlvw0.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653531/image-rwanda/under_umbrella_medium_w8hjvw.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653532/image-rwanda/under_umbrella_small_c6tqge.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },

    {
        title: '1000 Hills ',
        location: 'Rusiga',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444595/image-rwanda/Rusiga_mfqkfy.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653525/image-rwanda/mockup-of-three-squared-canvas-on-the-wall-of-a-minimalistic-room-2510-el1_fg2qzc.jpg',
        mediumView: '',
        smallView: '',
        largeCopies: 3,
        mediumCopies: 'no',
        smallCopies: 'no'
    },
    {
        title: 'Gisovu Tea Plantation',
        location: 'Gisovu, Karongi',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444580/image-rwanda/F14A4211_-_Copy_1_strekb.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653519/image-rwanda/gisovu_tea_plantation_large_eswgj3.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653519/image-rwanda/gisovu_tea_plantation_medium_zgkigo.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653519/image-rwanda/gisovu_tea_plantation_small_auxtbg.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },
    {
        title: 'The New year',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444585/image-rwanda/Landscape_hm8sgs.jpg',
        largeView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653524/image-rwanda/new_year_large_b4otmm.jpg',
        mediumView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653525/image-rwanda/new_year_medium_nrynr5.jpg',
        smallView: 'https://res.cloudinary.com/hervebu/image/upload/v1617653525/image-rwanda/new_year_small_zw3trc.jpg',
        largeCopies: 1,
        mediumCopies: 2,
        smallCopies: 4
    },

  
];


let grid_div = document.querySelector('.gallery-flex');
const addImgs = () => {
    for (let i = 0; i < imagesArray.length; i++) {
        grid_div.innerHTML += 
        `<div class='flex-item flex-item-${i}' onclick='assignImgInfo("${imagesArray[i].title}",` 
        +` "${imagesArray[i].location}", "${imagesArray[i].largeView}", "${imagesArray[i].mediumView}",`
        +` "${imagesArray[i].smallView}", "${imagesArray[i].largeCopies}", "${imagesArray[i].mediumCopies}", "${imagesArray[i].smallCopies}")'>
        <img class='img-${i}' tabindex='1' src='${imagesArray[i].link}'></div>`;
    }
    grid_div.innerHTML += 
    `<li class='flex-item'></li>`;
}
addImgs();





function divSwap(prev_div_class, next_div_class) {
    document.querySelector(prev_div_class).classList.toggle('apear-effect', false);
    document.querySelector(prev_div_class).classList.toggle('disappear-div');
    document.querySelector(next_div_class).classList.toggle('apear-effect');

    div_on_display = next_div_class;    
}
function to_contactForm (prev_div_class, next_div_class) {
    document.querySelector(prev_div_class).classList.toggle('apear-effect', false);
    document.querySelector(prev_div_class).classList.toggle('disappear-div');
    document.getElementById('ordering-div').style.display = "none";
    document.querySelector(next_div_class).classList.toggle('apear-effect');
    div_on_display = next_div_class;  
}

const nav_div_swap = (next_div_class) => {
   divSwap(div_on_display, next_div_class)
   nav.classList.toggle('nav-active', false);
}

const assignImgInfo = (
    title, location, 
    largeImg, mediumImg , smallImg, 
    l_copies, m_copies, s_copies) => {
    document.getElementById('ordering-div').style.display = 'block';
    document.querySelector('.ordering-div-content').style.display = 'block';
    no_of_l_copies = l_copies;
    no_of_m_copies = m_copies;
    no_of_s_copies = s_copies;
    term_conds_checkbox.checked = false;
    checkout_btn.disabled = true;
    checkout_btn.style.backgroundColor = '#fa7e99';

    largeDisplay.display = 'inline-block';
    mediumDisplay.display = 'none';
    smallDisplay.display = 'none';
    ImgTitle.innerHTML = title;
    ImgLocation.innerHTML = location;
    largeSize.focus();
    selectedSize = 'large';
    total_money.value = 800000;
    document.getElementById('no_of_copies').innerHTML = 1;
 
    smallDisplay.backgroundImage = `url('${smallImg}')`;
    mediumDisplay.backgroundImage = `url('${mediumImg}')`;
    largeDisplay.backgroundImage = `url('${largeImg}')`;

}

document.querySelector('.close').onclick = function () {
    document.getElementById('ordering-div').style.display = "none";
    document.querySelector('.checkout_div').style.display = 'none';
  }
  

  window.onclick = function(event) {
    if (event.target == document.getElementById('ordering-div')) {
        document.getElementById('ordering-div').style.display = "none";
    } else if (event.target == document.querySelector('.checkout_div')) {
        document.querySelector('.checkout_div').style.display = 'none';
    }
  }



const sizeClick = (size) => {
    selectedSize = size;
    let copies;
    if (size === 'large') {

        largeDisplay.display = 'inline-block';
        copies = no_of_l_copies; 
        mediumDisplay.display = 'none';
        smallDisplay.display = 'none';
        total_money.value = 800000;
        total_money.addEventListener('focusout', amount_min_alert(800000));
    } else if (size === 'medium') {
        mediumDisplay.display = 'inline-block';
        copies = no_of_m_copies; 
        smallDisplay.display = 'none';
        largeDisplay.display = 'none';
        total_money.value = 600000;
        total_money.addEventListener('focusout', amount_min_alert(600000));

    } else if (size === 'small') {
        smallDisplay.display = 'inline-block';
        copies = no_of_s_copies;
        largeDisplay.display = 'none';
        mediumDisplay.display = 'none';
        total_money.value = 450000;
        total_money.addEventListener('mouseleave', amount_min_alert(450000));
    }
    document.getElementById('no_of_copies').innerHTML = copies; 
}

total_money.addEventListener('input', () => {
    if (total_money.value == 600000 || total_money.value == 450000 || total_money.value == 800000) {
        min_label.innerHTML = 'Minimum';
    } else {
        min_label.innerHTML = '';
    }
})

const amount_min_alert = (min_val) => {
    if (total_money.value < min_val) {
        total_money.value = min_val ;
    }
}




 
const checkboxClick = () => {
    if (!term_conds_checkbox.checked) {
        checkout_btn.disabled = true;
        checkout_btn.style.backgroundColor = '#fa7e99';
     
    } else if (term_conds_checkbox.checked){
        checkout_btn.disabled = false;
        checkout_btn.style.backgroundColor = '#F42A57';

    } 
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-field').value,
        email = document.getElementById('email-field').value,
        phone = document.getElementById('phone-field').value,
        message = document.getElementById('message-field').value;
    document.getElementById('contact-sbmt-btn').disabled = true;
    document.getElementById('contact-sbmt-btn').style.backgroundColor = '#79c973b2';
    fetch(
        'https://image-rwanda.herokuapp.com/api/v1/message',
        {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name,
                    email,
                    telephone: phone,
                    message

                })
        }
    ).then(res => res.json())
    .then(data => {
        if (data.status == 400) {

            document.getElementById('message-res').style.display = 'block';
            document.getElementById('message-res').innerHTML = data.message;
            document.getElementById('message-res').style.color = '#721C24';
            document.getElementById('message-res').style.backgroundColor = '#F8D7DA'
            if (document.getElementById('message-res').style.display === 'block') {
                setTimeout(function () {
                    document.getElementById('message-res').style.display = 'none';
                    document.getElementById('message-res').innerHTML = '';    
                }, 5000);
            }


        } else if (data.message === 'Saved successfull') {
            document.getElementById('message-res').style.display = 'block';
            document.getElementById('message-res').innerHTML = 'Message successfully sent';
            document.getElementById('message-res').style.color = '#3E774B';
            document.getElementById('message-res').style.backgroundColor = '#D4EDDA';
            setTimeout(function () {
                document.getElementById('message-res').style.display = 'none';
                document.getElementById('message-res').innerHTML = '';    
            }, 5000);
        }
        document.getElementById('contact-sbmt-btn').disabled = false;
        document.getElementById('contact-sbmt-btn').style.backgroundColor = '#55B94E';
    })    
})


function submit_to_checkout () {
    document.querySelector('.ordering-div-content').style.display = 'none';
    document.querySelector('.checkout_div').style.display = 'block'; 
    table_title_td.innerHTML = ImgTitle.innerHTML;
    table_size_td.innerHTML =  selectedSize;
    table_amount_td.innerHTML = total_money.value;

    if (selectedSize === 'large') {
        amount_min_alert(800000);
    } else if (selectedSize === 'medium') {
        amount_min_alert(600000);
    } else if (selectedSize === 'small') {
        amount_min_alert(450000);
    }

         let img_Info = 
         {
             title: ImgTitle.innerHTML,
             location: ImgLocation.innerHTML,
             selectedSize: selectedSize
         }; 
         console.log(img_Info);
}

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    document.querySelector('.checkout_div').style.display = 'none';
    document.querySelector('.ordering-div-content').style.display = 'block';
});

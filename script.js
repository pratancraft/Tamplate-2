/* =====================================================
   HAFIDZ STORE
===================================================== */


/* =====================================================
   LINK SOCIAL MEDIA
   GANTI DENGAN LINK ASLI KAMU
===================================================== */

const links = {

    instagram:
        "https://www.instagram.com/",

    tiktok:
        "https://www.tiktok.com/",

    facebook:
        "https://www.facebook.com/",

    youtube:
        "https://www.youtube.com/",

    shopee:
        "https://shopee.co.id/",

    whatsapp:
        "6281234567890"

};


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappMessage =
    "Halo Kak, saya tertarik dengan produk di Hafidz Store.";

document
    .querySelectorAll(".whatsapp-link")
    .forEach(function(link) {

        link.href =
            "https://wa.me/" +
            links.whatsapp +
            "?text=" +
            encodeURIComponent(
                whatsappMessage
            );

        link.target = "_blank";

    });


/* =====================================================
   SOCIAL MEDIA LINK
===================================================== */

document
    .querySelectorAll(".instagram")
    .forEach(function(link) {

        link.href = links.instagram;

    });


document
    .querySelectorAll(".tiktok")
    .forEach(function(link) {

        link.href = links.tiktok;

    });


document
    .querySelectorAll(".facebook")
    .forEach(function(link) {

        link.href = links.facebook;

    });


document
    .querySelectorAll(".youtube")
    .forEach(function(link) {

        link.href = links.youtube;

    });


document
    .querySelectorAll(".shopee-link")
    .forEach(function(link) {

        link.href = links.shopee;
        link.target = "_blank";

    });


/* =====================================================
   DATA PRODUK
===================================================== */

const products = [

    {
        name: "ROLEX",
        category: "automotive",
        price: 283400000,
        label: "ROLEX",
        image: "tugas5.jpg",
        description:
            "ROLEX dengan desain sporty dan fitur modern.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "NIKE",
        category: "automotive",
        price: 313750000,
        label: "NIKE",
        image: "tugas4.jpg",
        description:
            "NIKE dengan desain modern dan nyaman untuk kebutuhan sehari-hari.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "NIKE 2",
        category: "automotive",
        price: 283400000,
        label: "NIKE 2",
        image: "tugas3.jpg",
        description:
            "NIKE 2 dengan desain modern dan teknologi terbaru.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "GUCCI",
        category: "automotive",
        price: 674000000,
        label: "GUCCI",
        image: "tugas6.jpg",
        description:
            "GUCCI dengan tampilan premium dan teknologi modern.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "TOPI",
        category: "automotive",
        price: 746200000,
        label: "TOPI",
        image: "tugas7.jpg",
        description:
            "TOPI untuk pengalaman berkendara yang lebih premium.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "BAJU",
        category: "automotive",
        price: 1127000000,
        label: "BAJU",
        image: "tugas8.jpg",
        description:
            "BAJU dengan kemewahan dan kenyamanan tingkat tinggi.",
        shopee:
            "https://shopee.co.id/"
    },

    {
        name: "GUCCI 2",
        category: "automotive",
        price: 817650000,
        label: "GUCCI 2",
        image: "tugas9.jpg",
        description:
            "GUCCI 2 kendaraan listrik dengan desain futuristik.",
        shopee:
            "https://shopee.co.id/"
    }

];


/* =====================================================
   RUPIAH
===================================================== */

function rupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

const productsGrid =
    document.getElementById(
        "productsGrid"
    );


const productCount =
    document.getElementById(
        "productCount"
    );


function renderProducts(
    category = "all",
    search = ""
) {

    productsGrid.innerHTML = "";


    const filtered =
        products.filter(function(product) {

            const categoryMatch =
                category === "all" ||
                product.category === category;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );


            return (
                categoryMatch &&
                searchMatch
            );

        });


    productCount.textContent =
        filtered.length;


    if (filtered.length === 0) {

        productsGrid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
            ">

                <h3>
                    Produk tidak ditemukan
                </h3>

                <p>
                    Coba gunakan kata pencarian lain.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(
        function(product, index) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            card.innerHTML = `

               <div class="product-image">

    <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
    >

</div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.label}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <div class="product-price">
                        ${rupiah(product.price)}
                    </div>


                    <div class="product-actions">


                        <button
                            onclick="showProduct(${index})">

                            Detail

                        </button>


                        <a
                            href="${product.shopee}"
                            target="_blank">

                            🛒 Checkout

                        </a>


                    </div>

                </div>

            `;


            productsGrid.appendChild(
                card
            );

        }
    );

}


renderProducts();


/* =====================================================
   FILTER
===================================================== */

document
    .querySelectorAll(".filter")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {


                document
                    .querySelectorAll(".filter")
                    .forEach(
                        function(btn) {

                            btn.classList
                                .remove(
                                    "active"
                                );

                        }
                    );


                this.classList.add(
                    "active"
                );


                renderProducts(
                    this.dataset.category,
                    document.getElementById(
                        "searchInput"
                    ).value
                );

            }
        );

    });


/* =====================================================
   SEARCH
===================================================== */

document
    .getElementById(
        "searchInput"
    )
    .addEventListener(
        "input",
        function() {


            const active =
                document.querySelector(
                    ".filter.active"
                );


            renderProducts(
                active.dataset.category,
                this.value
            );

        }
    );


/* =====================================================
   MODAL
===================================================== */

const modal =
    document.getElementById(
        "productModal"
    );


const modalProduct =
    document.getElementById(
        "modalProduct"
    );


function showProduct(index) {

    const product =
        products[index];


    modalProduct.innerHTML = `

        <span class="section-label">
            ${product.label}
        </span>


        <h2 style="
            font-family:Montserrat;
            font-size:35px;
        ">

            ${product.name}

        </h2>


        <p style="
            margin:15px 0;
            color:#666;
        ">

            ${product.description}

        </p>


        <h3 style="
            font-size:25px;
            margin:20px 0;
        ">

            ${rupiah(product.price)}

        </h3>


        <a
            href="${product.shopee}"
            target="_blank"
            class="btn btn-dark">

            🛒 Checkout di Shopee

        </a>

    `;


    modal.classList.add(
        "show"
    );

}


document
    .getElementById(
        "modalClose"
    )
    .addEventListener(
        "click",
        function() {

            modal.classList.remove(
                "show"
            );

        }
    );


document
    .querySelector(
        ".modal-background"
    )
    .addEventListener(
        "click",
        function() {

            modal.classList.remove(
                "show"
            );

        }
    );


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


menuButton.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(
        ".nav-menu a"
    )
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   NAVBAR SHADOW
===================================================== */

window.addEventListener(
    "scroll",
    function() {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (
            window.scrollY > 30
        ) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);
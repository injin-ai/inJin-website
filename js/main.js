document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * ============================================
         * CURRENT YEAR
         * ============================================
         */

        const currentYear =
            document.getElementById("currentYear");

        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }


        /*
         * ============================================
         * NAVBAR SCROLL EFFECT
         * ============================================
         */

        const navbar =
            document.querySelector(".navbar");

        if (navbar) {

            window.addEventListener(
                "scroll",
                function () {

                    if (window.scrollY > 40) {

                        navbar.classList.add("scrolled");

                    } else {

                        navbar.classList.remove("scrolled");

                    }

                }
            );

        }


        /*
         * ============================================
         * MOBILE MENU AUTO CLOSE
         * ============================================
         */

        const navLinks =
            document.querySelectorAll(
                ".navbar .nav-link"
            );

        const navigation =
            document.getElementById(
                "mainNavigation"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth < 992 &&
                            navigation
                        ) {

                            const bsCollapse =
                                bootstrap.Collapse
                                .getInstance(
                                    navigation
                                );

                            if (bsCollapse) {

                                bsCollapse.hide();

                            }

                        }

                    }
                );

            }
        );

    }
);
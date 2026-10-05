document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "earlyAccessForm"
            );

        const message =
            document.getElementById(
                "formMessage"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /*
                 * Demo only.
                 *
                 * Later this can become:
                 *
                 * POST /api/v1/contact
                 *
                 * to your Spring Boot backend.
                 */


                message.classList.remove(
                    "d-none"
                );


                form.reset();

            }
        );

    }
);
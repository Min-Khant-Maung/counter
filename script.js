const decrease = document.getElementById("decrease_btn");
const reset = document.getElementById("reset_btn");
const increase = document.getElementById("increase_btn");
const final_result = document.getElementById("result");

let count = 4;

decrease.addEventListener("click", 
     () => {
            --count;
            final_result.innerText=count;
    }
);



reset.addEventListener("click",
    () => {
            count=0;
            final_result.innerText=count;
    }
);

increase.addEventListener("click",
    () => {
        ++count;
        final_result.innerText=count;
    }
);

import $ from "jquery";

export function sendOrder (basketList) {
    console.log('basket js', basketList)
    basketList.length > 0
      ? basketList.forEach((item) => {
          let sendOrderToOrderList = {
            dish_name: item.dish_name,
            dish_count: item.dish_count,
            dish_extras: item.dish_extras,
            dish_sauce: item.dish_sauce,
            total_price: parseFloat(item.dish_cost).toFixed(2),
            user_id: 2,
            note: item.note,
            status: "ordered",
          };

          $(".popup__done").css("display", "block");
          $(".overflow").css("display", "none");
          $(".popup__btn").attr("disabled", true);

          setTimeout(function() {
            window.location.href = "/";
            $(".popup__done").css("display", "none");
            $(".overflow").css("display", "block");
            $(".popup__btn").attr("disabled", false);
            $("body").removeClass("hidden");
          }, 5000);

          fetch("/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sendOrderToOrderList),
          })
            .then(function(response) {
              if (response.status >= 400) {
                throw new Error("Bad response from server");
              }
              return response.json();
            })
            .then(function(data) {})
            .catch(function(err) {
              console.log(err);
            });
        })
      : (window.location.href = `/menu`);
  };
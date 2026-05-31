/**
 *
 * DRK SupplyFinder Javascript
 *
 */

  $('.tx-drk-supply-finder .o-btn--geoloaction').click(function (event) {
      event.preventDefault();
      let searchbox = $(this).closest('form').find('.searchbox');

      function handleSuccess(position) {
        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;

        searchbox.val(latitude + ',' + longitude);
        searchbox.addClass('has-value');
      }

      function handleError(error) {
        alert('Es war nicht möglich Sie zu lokalisieren.');
        console.log(error);
      }

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

    });


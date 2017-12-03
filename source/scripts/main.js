(function($, window, document, undefined){
    'use strict';

  var $window = $(window),
    $body = $('body'),
    $mainLogo = $('#main_logo'),
    $mainMenu = $('#main_menu'),
    $mainBg = $('#main_bg'),
    $contactsForm = $('#contacts_form'),
    mainMenuHeight = $mainMenu.height(),
    $mainLogoCanvas = $('#main-logo-canvas'),
    widthMd = 992;

    if ($body.width() > widthMd) {
        var drawLogoBackground = function(ctx, width, height) {
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(753, 0);
            ctx.lineTo(753, 634);
            ctx.lineTo(0, 634);
            ctx.closePath();
            ctx.clip();
            ctx.scale(1, 1);
            ctx.translate(0, 0);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.lineWidth = 1;
            ctx.fillStyle = '#ffffff';
            ctx.translate(83, 91);
            ctx.beginPath();
            ctx.moveTo(275.753518, 441.079089);
            ctx.bezierCurveTo(275.09701, 439.683688, 260.226491, 408.778571, 231.946756, 404.818866);
            ctx.bezierCurveTo(215.505739, 402.516116, 200.805076, 401.564277, 187.833982, 400.722991);
            ctx.bezierCurveTo(159.871043, 398.913687, 87.7843249, 397.480536, 72.1400155, 383.13958);
            ctx.bezierCurveTo(56.9958387, 369.254321, 57.3018497, 352.002571, 57.672568, 342.323741);
            ctx.bezierCurveTo(54.4129436, 343.240527, 52.1872862, 343.643643, 49.9993746, 343.643643);
            ctx.bezierCurveTo(45.1382475, 343.644991, 40.4631536, 341.648286, 36.6130762, 338.037768);
            ctx.bezierCurveTo(30.9309768, 332.709625, 29.6503138, 324.281937, 32.1132309, 316.892375);
            ctx.bezierCurveTo(32.6902033, 315.104643, 33.1957282, 312.816723, 33.497695, 310.817321);
            ctx.bezierCurveTo(28.7511536, 308.722196, 22.721253, 305.800616, 17.6956619, 300.299902);
            ctx.bezierCurveTo(13.2928773, 295.481384, 6.53771713, 284.954527, 10.7773856, 268.596643);
            ctx.bezierCurveTo(12.6215403, 261.487509, 14.7393525, 256.024545, 16.4419602, 251.636107);
            ctx.bezierCurveTo(16.8800818, 250.510348, 17.3707779, 249.243027, 17.7711536, 248.142884);
            ctx.bezierCurveTo(16.3422033, 247.176214, 14.2904464, 246.041018, 12.6309768, 245.342643);
            ctx.bezierCurveTo(5.01035801, 242.336125, -0.000404419889, 235.05442, -0.000404419889, 226.859973);
            ctx.bezierCurveTo(-0.000404419889, 218.665527, 5.00900994, 211.383821, 12.6296287, 208.377304);
            ctx.bezierCurveTo(14.2904464, 207.676232, 16.3422033, 206.542384, 17.7711536, 205.575714);
            ctx.bezierCurveTo(17.3707779, 204.475571, 16.8800818, 203.209598, 16.4419602, 202.082491);
            ctx.bezierCurveTo(14.7393525, 197.694054, 12.6215403, 192.231089, 10.7773856, 185.121955);
            ctx.bezierCurveTo(6.53771713, 168.764071, 13.2928773, 158.237214, 17.6956619, 153.417348);
            ctx.bezierCurveTo(22.7226011, 147.916634, 28.7525017, 144.993705, 33.5003912, 142.89858);
            ctx.bezierCurveTo(33.1808994, 140.794018, 32.6470652, 138.42925, 32.1132309, 136.826223);
            ctx.bezierCurveTo(29.6503138, 129.436661, 30.9309768, 121.008973, 36.6130762, 115.682179);
            ctx.bezierCurveTo(40.4618055, 112.071661, 45.1395956, 110.074955, 49.9993746, 110.074955);
            ctx.bezierCurveTo(52.1872862, 110.074955, 54.4115956, 110.47942, 56.615684, 111.323402);
            ctx.bezierCurveTo(57.3018497, 101.716027, 56.9958387, 84.4642768, 72.1400155, 70.5803661);
            ctx.bezierCurveTo(87.7843249, 56.2380625, 159.871043, 54.8062589, 187.833982, 52.9956071);
            ctx.bezierCurveTo(200.805076, 52.1556696, 215.505739, 51.2024821, 231.946756, 48.9010804);
            ctx.bezierCurveTo(260.723927, 44.8712679, 275.587706, 13.0129643, 275.730601, 12.6920893);
            ctx.bezierCurveTo(278.928214, 5.46970536, 286.040612, 0.718598214, 293.929496, 0.718598214);
            ctx.bezierCurveTo(301.951839, 0.763089286, 309.046712, 5.38072321, 312.19175, 12.6395089);
            ctx.bezierCurveTo(312.84691, 14.0335625, 327.718778, 44.9400268, 355.997165, 48.9010804);
            ctx.bezierCurveTo(372.439529, 51.2024821, 387.137496, 52.1556696, 400.10859, 52.9956071);
            ctx.bezierCurveTo(428.071529, 54.8062589, 500.158248, 56.2380625, 515.805253, 70.5803661);
            ctx.bezierCurveTo(530.94943, 84.4642768, 530.642071, 101.716027, 530.272701, 111.394857);
            ctx.bezierCurveTo(533.530977, 110.47942, 535.756634, 110.074955, 537.945894, 110.074955);
            ctx.bezierCurveTo(542.805673, 110.074955, 547.482115, 112.071661, 551.329496, 115.682179);
            ctx.bezierCurveTo(557.012944, 121.008973, 558.292259, 129.436661, 555.83069, 136.826223);
            ctx.bezierCurveTo(555.255065, 138.615304, 554.748192, 140.901875, 554.447573, 142.901277);
            ctx.bezierCurveTo(559.192767, 144.995054, 565.222667, 147.917982, 570.24691, 153.417348);
            ctx.bezierCurveTo(574.651043, 158.237214, 581.406203, 168.764071, 577.165187, 185.121955);
            ctx.bezierCurveTo(575.323728, 192.231089, 573.20322, 197.694054, 571.50196, 202.082491);
            ctx.bezierCurveTo(571.063839, 203.210946, 570.573143, 204.47692, 570.171419, 205.579759);
            ctx.bezierCurveTo(571.741916, 206.640804, 573.974314, 207.83667, 575.275198, 208.362473);
            ctx.bezierCurveTo(582.849982, 211.425616, 587.887706, 218.757205, 587.84322, 226.927384);
            ctx.bezierCurveTo(587.800082, 235.082732, 582.895817, 242.349607, 575.314292, 245.342643);
            ctx.bezierCurveTo(573.653474, 246.041018, 571.601717, 247.176214, 570.171419, 248.142884);
            ctx.bezierCurveTo(570.574491, 249.243027, 571.065187, 250.510348, 571.50196, 251.636107);
            ctx.bezierCurveTo(573.20322, 256.024545, 575.323728, 261.487509, 577.165187, 268.596643);
            ctx.bezierCurveTo(581.406203, 284.954527, 574.651043, 295.481384, 570.24691, 300.299902);
            ctx.bezierCurveTo(565.222667, 305.800616, 559.190071, 308.723545, 554.443529, 310.820018);
            ctx.bezierCurveTo(554.763021, 312.923232, 555.299551, 315.289348, 555.83069, 316.892375);
            ctx.bezierCurveTo(558.292259, 324.281937, 557.012944, 332.709625, 551.329496, 338.037768);
            ctx.bezierCurveTo(547.482115, 341.648286, 542.804325, 343.643643, 537.945894, 343.643643);
            ctx.bezierCurveTo(535.755286, 343.644991, 533.530977, 343.240527, 531.326888, 342.395196);
            ctx.bezierCurveTo(530.642071, 352.002571, 530.94943, 369.254321, 515.805253, 383.138232);
            ctx.bezierCurveTo(500.158248, 397.480536, 428.071529, 398.913687, 400.109938, 400.722991);
            ctx.bezierCurveTo(387.138844, 401.564277, 372.439529, 402.516116, 355.997165, 404.818866);
            ctx.bezierCurveTo(327.219993, 408.84733, 312.356214, 440.706982, 312.213319, 441.026509);
            ctx.bezierCurveTo(309.017054, 448.247545, 301.906004, 453, 294.014424, 453);
            ctx.bezierCurveTo(285.992082, 452.956857, 278.897209, 448.339223, 275.753518, 441.079089);
            ctx.closePath();
            ctx.shadowBlur = 100;
            ctx.shadowColor = '#4D7A80';
            ctx.fill();
            ctx.stroke();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(728, 0);
            ctx.lineTo(728, 584);
            ctx.lineTo(0, 584);
            ctx.closePath();
            ctx.clip();
            ctx.translate(0, 0);
            ctx.translate(0, 0);
            ctx.scale(1, 1);
            ctx.translate(0, 0);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.save();
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.lineWidth = 1;
            ctx.save();
            ctx.strokeStyle = '#dbeff0';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.translate(0,0);
            ctx.beginPath();
            ctx.moveTo(552.865078, 216.54155);
            ctx.bezierCurveTo(544.884526, 205.790889, 552.865078, 199.355862, 557.852924, 180.114148);
            ctx.bezierCurveTo(562.839421, 160.873782, 540.229653, 162.441755, 535.907752, 154.461675);
            ctx.bezierCurveTo(531.583156, 146.480246, 536.903973, 130.517389, 536.903973, 130.517389);
            ctx.bezierCurveTo(536.903973, 130.517389, 526.263686, 133.842086, 514.957454, 127.189996);
            ctx.bezierCurveTo(503.651222, 120.540604, 518.284482, 99.9223625, 502.322029, 85.2888446);
            ctx.bezierCurveTo(486.360924, 70.656675, 403.10952, 75.6450679, 353.231067, 68.6613179);
            ctx.bezierCurveTo(312.665056, 62.9812911, 293.971421, 20.7727464, 293.971421, 20.7727464);
            ctx.bezierCurveTo(293.971421, 20.7727464, 275.279134, 62.9812911, 234.713123, 68.6613179);
            ctx.bezierCurveTo(184.83467, 75.6450679, 101.583266, 70.656675, 85.6221613, 85.2888446);
            ctx.bezierCurveTo(69.6610564, 99.9223625, 84.292968, 120.540604, 72.9867359, 127.189996);
            ctx.bezierCurveTo(61.6805039, 133.842086, 51.0388685, 130.517389, 51.0388685, 130.517389);
            ctx.bezierCurveTo(51.0388685, 130.517389, 56.3596862, 146.480246, 52.0377856, 154.461675);
            ctx.bezierCurveTo(47.714537, 162.441755, 25.103421, 160.873782, 30.0899182, 180.114148);
            ctx.bezierCurveTo(35.0791116, 199.355862, 43.0596641, 205.790889, 35.0791116, 216.54155);
            ctx.bezierCurveTo(30.5388243, 222.655702, 20.1506254, 226.859434, 20.1506254, 226.859434);
            ctx.bezierCurveTo(20.1506254, 226.859434, 30.5388243, 231.061818, 35.0791116, 237.17597);
            ctx.bezierCurveTo(43.0596641, 247.92663, 35.0791116, 254.361657, 30.0899182, 273.60472);
            ctx.bezierCurveTo(25.103421, 292.845086, 47.714537, 291.275764, 52.0377856, 299.258541);
            ctx.bezierCurveTo(56.3596862, 307.238621, 51.0388685, 323.202827, 51.0388685, 323.202827);
            ctx.bezierCurveTo(51.0388685, 323.202827, 61.6805039, 319.876782, 72.9867359, 326.528871);
            ctx.bezierCurveTo(84.292968, 333.178264, 69.6610564, 353.795157, 85.6221613, 368.430023);
            ctx.bezierCurveTo(101.583266, 383.062193, 184.83467, 378.0738, 234.713123, 385.05755);
            ctx.bezierCurveTo(275.279134, 390.737577, 293.971421, 432.944773, 293.971421, 432.944773);
            ctx.bezierCurveTo(293.971421, 432.944773, 312.665056, 390.737577, 353.231067, 385.05755);
            ctx.bezierCurveTo(403.10952, 378.0738, 486.360924, 383.062193, 502.322029, 368.430023);
            ctx.bezierCurveTo(518.284482, 353.795157, 503.651222, 333.178264, 514.957454, 326.528871);
            ctx.bezierCurveTo(526.263686, 319.876782, 536.903973, 323.202827, 536.903973, 323.202827);
            ctx.bezierCurveTo(536.903973, 323.202827, 531.583156, 307.238621, 535.907752, 299.258541);
            ctx.bezierCurveTo(540.229653, 291.275764, 562.839421, 292.845086, 557.852924, 273.60472);
            ctx.bezierCurveTo(552.865078, 254.361657, 544.884526, 247.92663, 552.865078, 237.17597);
            ctx.bezierCurveTo(557.405366, 231.061818, 567.793565, 226.859434, 567.793565, 226.859434);
            ctx.bezierCurveTo(567.793565, 226.859434, 557.405366, 222.655702, 552.865078, 216.54155);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
        };
        drawLogoBackground($mainLogoCanvas[0].getContext('2d'), $mainLogoCanvas.parent().width(), $mainLogoCanvas.parent().height());

        //canvas init
        var canvas = document.getElementById('snow');
        var ctx = canvas.getContext('2d');

        //canvas dimensions
        var W = window.innerWidth;
        var H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        //snowflake particles
        var mp = 50; //max particles
        var particles = [];
        for(var i = 0; i < mp; i++)
        {
          particles.push({
            x: Math.random()*W, //x-coordinate
            y: Math.random()*H, //y-coordinate
            r: Math.random()*10+1, //radius
            d: Math.random()*mp //density
          });
        }

        //Function to move the snowflakes
        //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        var angle = 0;

        var update = function() {
          angle += 0.01;
          for(var i = 0; i < mp; i++)
          {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
              if(i%3 > 0) //66.67% of the flakes
              {
                particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
              }
              else
              {
                //If the flake is exitting from the right
                if(Math.sin(angle) > 0)
                {
                  //Enter from the left
                  particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                }
                else
                {
                  //Enter from the right
                  particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                }
              }
            }
          }
        };

        var clearIntervalSnow = setInterval(function(){
            ctx.clearRect(0, 0, W, H);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            for(var i = 0; i < mp; i++)
            {
              var p = particles[i];
              ctx.moveTo(p.x, p.y);
              ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
            }
            ctx.fill();
            update();
        }, 33);

        $window.scroll(function(){
            var scrollPos = $window.scrollTop();

            if (scrollPos > mainMenuHeight) {
                $mainMenu.addClass('sticky');
            } else {
                $mainMenu.removeClass('sticky');
            }

            if (scrollPos > $body.height()) {
                $mainLogo.hide();
                $mainBg.css('top', 0);
            }else {
                $mainLogo.show();
                $mainBg.css('top', (0 - (scrollPos * 0.25)) + 'px');
            }
        });
    }

    var gssFormRegistrationUrl = new GoogleSpreadsheetsParser('https://docs.google.com/spreadsheets/d/1hdHtbgSzztQ4GgB1wO9D-fNJAVmAOY-GN8nWhvCvAc0/pubhtml', {sheetTitle: 'registration_form_url', hasTitle: true});
    var registrationUrl = gssFormRegistrationUrl && gssFormRegistrationUrl.contents[0];

    if (registrationUrl && (registrationUrl.length > 0)) {
      $('*[data-registration-form-url]').each(function(i,val){
        val.href = registrationUrl
      })
      $('*[data-scroll-to-block="#contacts_form"], [data-scroll-to-block="#contacts_form_mobile"], #contacts_form, #contacts_form_mobile').each(function(i,val){
        val.classList.remove('hide');
        if (val.getAttribute('data-scroll-to-block')) {
          val.parentNode.classList.remove('hide');
        }
      });
    }

    var gssReportSheet = new GoogleSpreadsheetsParser('https://docs.google.com/spreadsheets/d/1hdHtbgSzztQ4GgB1wO9D-fNJAVmAOY-GN8nWhvCvAc0/pubhtml', {sheetTitle: 'report_block', hasTitle: true});

    var reportUrl = gssReportSheet && gssReportSheet.contents[0][0];

    if (reportUrl && (reportUrl.length > 0)) {
      $('*[data-report-url]').each(function(i,val){
        val.href = reportUrl
      })
      $('*[data-scroll-to-block="#report_block"], [data-scroll-to-block="#report_block_mobile"], #report_block, #report_block_mobile').each(function(i,val){
        val.classList.remove('hide');
        if (val.getAttribute('data-scroll-to-block')) {
          val.parentNode.classList.remove('hide');
        }
      });
    }

    var reportTextUrl = gssReportSheet && gssReportSheet.contents[0][1];

    if (reportTextUrl && (reportTextUrl.length > 0)) {
      $('*[data-report-url-text]').each(function(i,val){
        val.innerHTML = reportTextUrl
      })
    }

    var reportText = gssReportSheet && gssReportSheet.contents[0][2];

    if (reportText && (reportText.length > 0)) {
      $('*[data-report-text]').each(function(i,val){
        val.innerHTML = reportText
      })
    }

    // function to animate scroll to form
    $('*[data-scroll-to-block]').each(function(i,val){
        var $this = $(val),
            $elem = $($this.data('scroll-to-block'));
        if($elem.length) {
            $this.on('click',function(e){
                $('body,html').animate({scrollTop: ($this.data('scroll-to-block') === '#to_top') ? 0 : ($elem.offset().top - 120)});
                e.preventDefault();
                if ($body.width() < widthMd) {
                    $('#header__button').click();
                }
            });
        }
    });

    var map;
    var lvivLat = {lat: 49.8403074, lng: 24.0328329};
    var image = '/images/map-marker.png';
    var infoWindows = [];

    window.initMap = function() {
      map = new google.maps.Map(document.getElementById('main_map'), {
        center: lvivLat,
        zoom: 13,
        scrollwheel: false,
        // navigationControl: false,
        // mapTypeControl: false,
        // scaleControl: false,
        // draggable: false,
      });
      var infowindow = null;
      initMarkers();

      function initMarkers() {
        var gss = new GoogleSpreadsheetsParser('https://docs.google.com/spreadsheets/d/1hdHtbgSzztQ4GgB1wO9D-fNJAVmAOY-GN8nWhvCvAc0/pubhtml', {sheetTitle: 'google_maps_pointers', hasTitle: true});
        var markerNode;

        gss.contents.forEach(function(marker){
          markerNode = new google.maps.Marker({
            position: {
              lat: parseFloat(marker[2]),
              lng: parseFloat(marker[3])
            },
            map: map,
            title: marker[0],
            icon: image
          });
          assignInfoWindow(markerNode, marker[1].replace(/\n/g, '<br />'));
        });

        // var i = 0, len = window.markersArray.length, marker;
        // for (i = 0; i < len; i++) {
        //   marker = new google.maps.Marker({
        //     position: window.markersArray[i].lat,
        //     map: map,
        //     title: window.markersArray[i].title,
        //     icon: image
        //   });
        //   assignInfoWindow(marker, window.markersArray[i].info);
        // }
      }

      function assignInfoWindow(marker, info) {
        var infowindow = new google.maps.InfoWindow({
          content: info
        });

        // infoWindows.push[infowindow];

        marker.addListener('click', function() {
          //Close active window if exists
          if(window.activeWindow != null) window.activeWindow.close();

          //Open new window
          infowindow.open(marker.get('map'), marker);

          //Store new window in global variable
          window.activeWindow = infowindow;
        });
      }
    };

})(jQuery, window, document);

function mpld3_load_lib(url, callback){
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function(){console.warn("failed to load library " + url);};
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
     // already loaded: just create the figure
     !function(mpld3){
         
         mpld3.draw_figure("fig_el1424826137113471368323391665", {"width": 432.0, "height": 288.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el142482613955634032", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el142482614016618992", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el142482613711347136", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
     }(mpld3);
  }else if(typeof define === "function" && define.amd){
     // require.js is available: use it to load d3/mpld3
     require.config({paths: {d3: "https://d3js.org/d3.v5"}});
     require(["d3"], function(d3){
        window.d3 = d3;
        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.2.js", function(){
           
           mpld3.draw_figure("fig_el1424826137113471368323391665", {"width": 432.0, "height": 288.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el142482613955634032", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el142482614016618992", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el142482613711347136", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
        });
      });
  }else{
      // require.js not available: dynamically load d3 & mpld3
      mpld3_load_lib("https://d3js.org/d3.v5.js", function(){
           mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.2.js", function(){
                   
                   mpld3.draw_figure("fig_el1424826137113471368323391665", {"width": 432.0, "height": 288.0, "axes": [{"bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el142482613955634032", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el142482614016618992", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el142482613711347136", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
              })
           });
  }

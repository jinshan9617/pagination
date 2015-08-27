// JavaScript File

(function (window, factory) {
  if (typeof exports === 'object') {

    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {

    define(factory);
  } else {

    window.eventUtil = factory();
  }
})(this, function () {
  function pagination (obj) {
    var options = {
        page: 1,
        pageSize: 10,
        edges: 1,
        preText: 'pre',
        nextText: 'next'
      };
    var i, j, totalSize, page, pageSize, pageNum,
        res = [];

    for (i in obj) {
      options[i] = obj[i];
    }

    totalSize = options.totalSize;
    page = options.page;
    pageSize = options.pageSize;
    edges = options.edges;
    preText = options.preText;
    nextText = options.nextText;

    res.push({
      page: page - 1,
      disable: !(page > 1),
      text: preText
    });

    pageNum = Math.ceil(totalSize / pageSize);

    if (page - edges > 1) {
      res.push({
        page: 1,
        disable: false,
        text: '1'
      });
      res.push({
        page: 0,
        disable: true,
        text: '...'
      });
    }

    for (i = page - edges, j = page + edges; i <= j; i++) {
      if (i > 0) {
        res.push({
          page: i,
          disable: false,
          text: i + ''
        });
      }
    }

    if (page + edges < pageNum) {
      res.push({
        page: 0,
        disable: true,
        text: '...'
      });
      res.push({
        page: pageNum,
        disable: false,
        text: pageNum + ''
      });
    }

    res.push({
      page: page - 1,
      disable: !(pageNum > 1 && page < pageNum),
      text: nextText
    });

    return res;
  }

  return pagination;
});

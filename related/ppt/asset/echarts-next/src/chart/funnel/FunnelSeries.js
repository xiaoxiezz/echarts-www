define(function(require) {

    'use strict';

    var List = require('../../data/List');
    var SeriesModel = require('../../model/Series');

    var PieSeries = SeriesModel.extend({

        type: 'series.funnel',

        init: function (option) {
            SeriesModel.prototype.init.apply(this, arguments);

            // Enable legend selection for each data item
            // Use a function instead of direct access because data reference may changed
            this.legendDataProvider = function () {
                return this._dataBeforeProcessed;
            };
        },

        getInitialData: function (option, ecModel) {
            var list = new List(['value'], this);
            list.initData(option.data);
            return list;
        },

        defaultOption: {
            zlevel: 0,                  // 一级层叠
            z: 2,                       // 二级层叠
            clickable: true,
            legendHoverLink: true,
            x: 80,
            y: 60,
            x2: 80,
            y2: 60,
            // width: {totalWidth} - x - x2,
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending', // 'ascending', 'descending'
            gap: 0,
            funnelAlign: 'center',
            label: {
                normal: {
                    show: true,
                    position: 'outer'
                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                show: true,
                length: 20,
                lineStyle: {
                    // color: 各异,
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                normal: {
                    // color: 各异,
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    // color: 各异,
                }
            }
        }
    });

    return PieSeries;
});
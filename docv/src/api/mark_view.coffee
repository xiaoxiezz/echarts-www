define((require) ->
    _ = require 'lodash'
    require 'jqueryui'

    markTemplate = (mark) ->
        "<div class='mark-item #{mark.type}'
                #{CONST.DATA_KEY}='#{JSON.stringify(mark.data)}' style='#{mark.style}'>
         </div>"

    CONST =
        DATA_KEY: 'data-mark'
        TYPE_REG: /\s*(icon-arrow-[\w\-]+)\s*/i
        SELECTOR: '.mark-item'
        TITLE: ''

    $.widget('mark.mark', {
        _create: () ->
            @ele = $ @element

#        _destroy: () ->
#            @element.remove()
#            @ele = null

        getData: () ->
            JSON.parse(@ele.attr(CONST.DATA_KEY) || {})

        getType: () ->
            @ele.attr('class').match(CONST.TYPE_REG)?[1]

        toJSON: () ->
            [style, data, type] =
                [
                    @ele.attr('style')
                    @getData()
                    @getType()
                ]

            style = style.replace(/rgb\((.+)\)/i, () ->
                hex = '#'
                [r, g, b] = arguments[1].split(',')

                # eg: rgb(0, 255, 1) => #00ff01
                hex += _.padLeft(parseInt(dec, 10).toString(16), 2, 0) for dec in [r, g, b]

                hex
            )

            { style, data, type }

    })


    class MarkFactory

        constructor: (@options) ->
            @markList = []

        # 根据数据，反绘标记点
        render: (marks) ->
            html = _.map(marks, (mark) ->
                {data, type, style} = mark

                markTemplate { data, type, style }
            ).join('')

            widgets = $(html).mark()

            @markList = widgets


        remove: (mark) ->
            _.remove @markList, mark
            $(mark).mark('destroy')

        getMark: () ->
            @markList

        clear: () ->
            _.each(@markList, (mark) ->
                $(mark).mark('destroy')
            )

    new MarkFactory()
)
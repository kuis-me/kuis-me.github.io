import n from"./Dv2PrIyq.js";import{ar as t,v as o,c as s,o as l,ap as i,b as d,an as a}from"#entry";import"./C_eBRcTf.js";import"./ZhWAdK_X.js";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},c=t.extend({name:"overlaybadge",style:p,classes:v}),g={name:"OverlayBadge",extends:n,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},m={name:"OverlayBadge",extends:g,inheritAttrs:!1,components:{Badge:n}};function y(e,u,b,B,f,$){var r=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}m.render=y;export{m as default};

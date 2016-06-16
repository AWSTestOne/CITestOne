function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var Segment060f14df38fb747 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Label01a0d1d95ea3148": "Label"
        }, {
            "Label01a0d1d95ea3148": "Label"
        }, {
            "Label01a0d1d95ea3148": "Label"
        }],
        "groupCells": false,
        "height": "120dp",
        "id": "Segment060f14df38fb747",
        "isVisible": true,
        "left": "3dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox01343a0fe35d74b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "67dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Label01a0d1d95ea3148": "Label01a0d1d95ea3148"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0dad99f3b92a24d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "33dp",
        "id": "Button0dad99f3b92a24d",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_2a9ba1bb2824409897e629097d5999ed,
        "skin": "slButtonGlossBlue",
        "text": "Back",
        "top": "6dp",
        "width": "93dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(Segment060f14df38fb747, Button0dad99f3b92a24d);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmHome.info = {
        "kuid": "ee1494e755864e31bff7cb3dc62e655a"
    };
};
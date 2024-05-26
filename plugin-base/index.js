import './index.css'

// Read about Pengu entry points here:
// https://pengu.lol/guide/javascript-plugin#plugin-entry-points

// This function is called when LCU is loading its own plugins
export function init(context) {

    // Call postInit to obtain API object of lol-uikit RCP.
    // You can learn more about RCP and postInit here: https://pengu.lol/runtime-api/rcp
    context.rcp.postInit('rcp-fe-lol-uikit', (uikit) => {

        // Now add our custom modal
        uikit.getModalManager().add({
            type: "DialogAlert",
            data: {
                contents: '<pengu-container><h6 class="pengu-text-red">Hello, world!</h6><pengu-icon /></pengu-container>',
                okText: 'Okay!'
            }
        });

    })

}

// This function is called after the window is loaded
export function load() {
    console.log('Window is loaded!');
}

WA.openTab('https://www.wikipedia.org/');

WA.sendChatMessage('Hello world', 'Mr Robot');

class Popup {
    /**
     * Closes the popup
     */
    close() {};
}

let helloWorldPopup;

// Open the popup when we enter a given zone

helloWorldPopup = WA.onEnterZone('zoneKanzel', () => {
	WA.sendChatMessage('Hello world', 'Mr Robot');
	
    WA.openPopup("PopUpKanzel_FELD", 'HALLELUJA!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});


// Close the popup when we leave the zone.
WA.onLeaveZone('zoneKanzel', () => {
    helloWorldPopup.close();
});

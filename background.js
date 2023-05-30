chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("zendesk.com/agent/tickets")) {
      const ticketId = tab.url.split("/")[5];
      console.log(ticketId);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        ticketId: ticketId,
      });
    }
  });
  
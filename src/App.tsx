import { useEffect, useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";

function App() {
  const [visitedSites, setvisitedSites] = useState([]);

  chrome.storage.local.get(["visitedSites"], function (result) {
    const currentSites = result.visitedSites || [];
    console.log("current visited sites : ", currentSites);
  });

  useEffect(() => {
    chrome.storage.local.get(["visitedSites"], function (result) {
      const foundVisitedSites = result.visitedSites || [];
      setvisitedSites(foundVisitedSites);
    });
  }, []);

  const removeHeader = async (site: string) => {
    const domainPattern = `*://${site}/*`;
    chrome.tabs.query({ url: domainPattern }, (tabs) => {
      if (tabs.length > 0) {
        const tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id as number },
          func: () => {
            const header = document.getElementById("visited-header");
            if (header) {
              header.remove();
            }
          },
        });
      }
    });
  };

  const deleteVisitedSite = (site: string) => {
    const updatedVisitedSites = visitedSites.filter(
      (visitedSite: string) => visitedSite !== site
    );

    chrome.storage.local.set({ visitedSites: updatedVisitedSites }).then(() => {
      removeHeader(site);
    });

    setvisitedSites(updatedVisitedSites);
  };

  console.log("visited sites : ", visitedSites);
  return (
    <div>
      <h1
        style={{
          color: `${visitedSites.length < 1 ? "red" : ""}`,
          whiteSpace: "nowrap",
        }}
      >
        {visitedSites.length < 1
          ? "There is no visited site here !"
          : "Visited sites"}
      </h1>
      <div className="list-container">
        {visitedSites.map((site: string, index: number) => {
          return (
            <div className="list-item" key={`${index + site}`}>
              <h3 className="list-item-title">{site}</h3>
              <MdDelete
                className="delete-icon"
                onClick={() => deleteVisitedSite(site)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

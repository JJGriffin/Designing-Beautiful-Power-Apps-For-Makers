// Keep a single pane instance around so we can close/reuse it
let sidePaneInstance = null;

/**
 * Example:
 *   Function Name: openPOViewer
 *   Parameters:
 *     - PrimaryControl (CRM Parameter)
 *     - pageName (String) -> e.g., "pt_PurchaseOrderViewer"
 *     - fieldLogicalName (String) -> e.g., "msdyn_name"
 */
function openPOViewer(primaryControl, pageName, fieldLogicalName) {
  try {
    const formContext = getFormContext(primaryControl);
    if (!formContext) throw new Error("Form context not found.");

    const recordIdRaw = formContext.data.entity.getId();
    const recordId = (recordIdRaw || "").replace(/[{}]/g, "");
    if (!recordId) throw new Error("Record Id is empty.");

    const titleValue = tryGetAttributeValue(formContext, fieldLogicalName);
    openPurchaseOrderPDFViewer(pageName, recordId, titleValue);
  } catch (e) {
    console.error(e);
    Xrm.Navigation.openAlertDialog({
      title: "Error",
      text: e.message || "Unable to open the PDF viewer."
    });
  }
}

/**
 * Opens/creates the side pane and navigates to your Custom Page with record context.
 */
function openPurchaseOrderPDFViewer(pageName, recordId, purchaseOrderNumber) {
  if (sidePaneInstance) {
    try { sidePaneInstance.close(); } catch (_) {}
    sidePaneInstance = null;
  }

  const paneTitle = purchaseOrderNumber
    ? `Purchase Order: ${purchaseOrderNumber}`
    : "Purchase Order – PDF Viewer";

  Xrm.App.sidePanes.createPane({
    title: paneTitle,
    imageSrc: "WebResources/mspp_content_snippets.svg",
    hideHeader: true,
    canClose: true,
    width: 600
  }).then((pane) => {
    sidePaneInstance = pane;

    pane.navigate({
      pageType: "custom",
      name: pageName,
      recordId: recordId
    });

    console.log(`PO PDF viewer opened for record ${recordId}`);
  }).catch((error) => {
    console.error("Error opening side pane:", error);
    Xrm.Navigation.openAlertDialog({
      title: "Error",
      text: "Unable to open the PDF viewer. Please try again."
    });
  });
}

/* ----------------------- helpers ----------------------- */

function getFormContext(primaryControl) {
  // Ribbon passes PrimaryControl as formContext
  if (primaryControl && typeof primaryControl.getAttribute === "function") {
    return primaryControl;
  }
  // Execution context style (just in case)
  if (primaryControl && typeof primaryControl.getFormContext === "function") {
    return primaryControl.getFormContext();
  }
  return null;
}

function tryGetAttributeValue(formContext, logicalName) {
  if (!logicalName) return null;
  const attr = formContext.getAttribute(logicalName);
  if (!attr) return null;
  const val = attr.getValue();
  if (Array.isArray(val) && val.length && val[0].name) return val[0].name; // lookup
  return val ?? null;
}

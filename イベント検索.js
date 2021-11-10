const admUrl = "https://admin-app.photocreate.jp/adm/";
const searchByEvent = (q) => {
    console.log(q);
    if (q.length === 0) {
        return;
    }
    const url = admUrl + "/index.php?action_event_search_form=true&action_event_search_result=true&event_name=" + encodeURI(q);
    console.log(url, q);
    window.open(url, "_blank");
}
searchByEvent(crmAPI.getSelection());

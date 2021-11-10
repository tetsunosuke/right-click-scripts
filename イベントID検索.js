const admUrl = "https://admin-app.photocreate.jp/adm/";
const searchByEventID = (q) => {
    if (q.length === 0) {
        return;
    }
    let url = "";
    q = FHConvert.ftoh(q);
    if (q.indexOf("E") === 0 || q.indexOf("e") === 0) {
        q = q.substr(1);
        url = admUrl + "index.php?action_event_info=true&events_id=" + q;
    } else if (q.indexOf("P") === 0 || q.indexOf("p") === 0) {
        url = admUrl + "index.php?action_event_search_resultnavi=true&search_str=" + q;
    } else if (isFinite(parseInt(q))) {
        // 数値のみもイベントIDとみなす
        url = admUrl + "/index.php?action_event_info=true&events_id=" + q;
    }
    if (url !== "") {
        window.open(url, "_blank");
    }
}

searchByEventID(crmAPI.getSelection());

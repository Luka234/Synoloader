var SynoLoader = {};
Components.utils.import("resource://SynoLoader/DownloadManager.js", SynoLoader);

onaccept = function(event) {
    if (document.getElementById("mode").value == "SynoLoader") {
        SynoLoader.SynoLoader_DownloadManager.transfer_to_nas(dialog.mLauncher.source.spec);
        return dialog.onCancel();
    } else {
        return dialog.onOK();
    }
};

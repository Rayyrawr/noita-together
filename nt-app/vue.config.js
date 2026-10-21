module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            externals: ["keytar"],
            builderOptions: {
                productName: "Noita Together",
                artifactName: 'Noita-Together-Setup-${version}.${ext}',
                win: {
                    target: "nsis",
                    requestedExecutionLevel: "requireAdministrator" //eugh
                },
                nsis: {
                    perMachine: true,
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                },
                publish: [{ provider: "github", owner: "Rayyrawr", repo: "noita-together" }]
            }
        }
    },
    filenameHashing: false
}

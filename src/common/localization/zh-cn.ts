import { IAppStrings } from "../strings";

/**
 * App Strings for English language
 */
export const chinese: IAppStrings = {
    appName: "视觉对象标记工具",
    common: {
        displayName: "显示名称",
        description: "描述",
        submit: "提交",
        cancel: "取消",
        save: "保存",
        delete: "删除",
        provider: "提供商",
        homePage: "主页",
    },
    titleBar: {
        help: "帮助",
        minimize: "Minimize",
        maximize: "Maximize",
        restore: "Restore",
        close: "退出",
    },
    homePage: {
        newProject: "新建项目",
        openLocalProject: {
            title: "打开本地项目",
        },
        openCloudProject: {
            title: "打开云端项目",
            selectConnection: "选择一个连接",
        },
        recentProjects: "最近项目",
        deleteProject: {
            title: "删除项目",
            confirmation: "您确定要删除项目",
        },
        importProject: {
            title: "导入项目",
            confirmation: "Are you sure you want to convert project ${project.file.name} project settings " +
                "to v2 format? We recommend you backup the project file first.",
        },
        messages: {
            deleteSuccess: "成功删除 ${project.name}",
        },
    },
    appSettings: {
        title: "应用设置",
        storageTitle: "Storage Settings",
        uiHelp: "Where your settings are stored",
        save: "保存设置",
        securityToken: {
            name: {
                title: "Name",
            },
            key: {
                title: "Key",
            },
        },
        securityTokens: {
            title: "Security Tokens",
            description: "Security tokens 用于加密项目配置中的敏感数据",
        },
        version: {
            description: "版本:",
        },
        commit: "提交 SHA",
        devTools: {
            description: "打开应用 Developer Tools 帮助诊断问题",
            button: "切换 Developer Tools",
        },
        reload: {
            description: "重新加载应用程序，放弃所有当前更改",
            button: "刷新应用",
        },
        messages: {
            saveSuccess: "保存应用设置成功",
        },
    },
    projectSettings: {
        title: "项目设置",
        securityToken: {
            title: "Security Token",
            description: "用于加密项目文件中的敏感数据",
        },
        save: "保存项目",
        sourceConnection: {
            title: "源连接",
            description: "资源加载的位置",
        },
        targetConnection: {
            title: "目标连接",
            description: "保存项目和导出数据的位置",
        },
        videoSettings: {
            title: "视频设置",
            description: "为标记提取帧的速率",
            frameExtractionRate: "帧提取率（每秒帧数）",
        },
        addConnection: "添加连接",
        messages: {
            saveSuccess: "保存 ${project.name} 项目设置成功",
        },
    },
    projectMetrics: {
        title: "Project Metrics",
        assetsSectionTitle: "Assets",
        totalAssetCount: "Total Assets",
        visitedAssets: "Visited Assets (${count})",
        taggedAssets: "Tagged Assets (${count})",
        nonTaggedAssets: "Not Tagged Assets (${count})",
        nonVisitedAssets: "Not Visited Assets (${count})",
        tagsSectionTitle: "Tags & Labels",
        totalRegionCount: "Total Tagged Regions",
        totalTagCount: "Total Tags",
        avgTagCountPerAsset: "Average tags per asset",
    },
    tags: {
        title: "标签",
        placeholder: "添加一个新标签",
        editor: "Tags Editor",
        modal: {
            name: "标签名",
            color: "标签颜色",
        },
        colors: {
            white: "White",
            gray: "Gray",
            red: "Red",
            maroon: "Maroon",
            yellow: "Yellow",
            olive: "Olive",
            lime: "Lime",
            green: "Green",
            aqua: "Aqua",
            teal: "Teal",
            blue: "Blue",
            navy: "Navy",
            fuschia: "Fuschia",
            purple: "Purple",
        },
        warnings: {
            existingName: "Tag name already exists. Choose another name",
            emptyName: "Cannot have an empty tag name",
            unknownTagName: "Unknown",
        },
        toolbar: {
            add: "添加新标签",
            search: "搜索标签",
            edit: "编辑标签",
            lock: "锁定标签",
            moveUp: "Move tag up",
            moveDown: "Move tag down",
            delete: "Delete tag",
        },
    },
    connections: {
        title: "Connections",
        details: "Connection Details",
        settings: "Connection Settings",
        instructions: "Please select a connection to edit",
        save: "Save Connection",
        messages: {
            saveSuccess: "Successfully saved ${connection.name}",
            deleteSuccess: "Successfully deleted ${connection.name}",
        },
        imageCorsWarning: "Warning: When using VoTT in a Web browser, some assets from Bing Image \
                          Search may not export correctly due to CORS (Cross Origin Resource Sharing) restrictions.",
        blobCorsWarning: "Warning: CORS (Cross Domain Resource Sharing) must be enabled on the Azure Blob Storage \
                          account, in order to use it as a source or target connection. More information on \
                          enabling CORS can be found in the {0}",
        azDocLinkText: "Azure Documentation.",
        providers: {
            azureBlob: {
                title: "Azure Blob Storage",
                description: "",
                accountName: {
                    title: "Account Name",
                    description: "",
                },
                containerName: {
                    title: "Container Name",
                    description: "",
                },
                sas: {
                    title: "SAS",
                    description: "Shared access signature used to authenticate to the blob storage account",
                },
                createContainer: {
                    title: "Create Container",
                    description: "Creates the blob container if it does not already exist",
                },
            },
            bing: {
                title: "Bing Image Search",
                options: "Bing Image Search Options",
                apiKey: "API Key",
                query: "Query",
                aspectRatio: {
                    title: "Aspect Ratio",
                    all: "All",
                    square: "Square",
                    wide: "Wide",
                    tall: "Tall",
                },
            },
            local: {
                title: "Local File System",
                folderPath: "Folder Path",
                selectFolder: "Select Folder",
                chooseFolder: "Choose Folder",
            },
        },
    },
    editorPage: {
        width: "Width",
        height: "Height",
        tagged: "Tagged",
        visited: "Visited",
        toolbar: {
            select: "Select (V)",
            pan: "Pan",
            drawRectangle: "Draw Rectangle",
            drawPolygon: "Draw Polygon",
            copyRectangle: "Copy Rectangle",
            copy: "Copy Regions",
            cut: "Cut Regions",
            paste: "Paste Regions",
            removeAllRegions: "Remove All Regions",
            previousAsset: "Previous Asset",
            nextAsset: "Next Asset",
            saveProject: "Save Project",
            exportProject: "Export Project",
            activeLearning: "Active Learning",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "Previous Tagged Frame",
            },
            nextTaggedFrame: {
                tooltip: "Next Tagged Frame",
            },
            previousExpectedFrame: {
                tooltip: "Previous Frame",
            },
            nextExpectedFrame: {
                tooltip: "Next Frame",
            },
        },
        help: {
            title: "Toggle Help Menu",
            escape: "Escape Help Menu",
        },
        assetError: "Unable to load asset",
        tags: {
            hotKey: {
                apply: "Apply Tag with Hot Key",
                lock: "Lock Tag with Hot Key",
            },
            rename: {
                title: "Rename Tag",
                confirmation: "Are you sure you want to rename this tag? It will be renamed throughout all assets",
            },
            delete: {
                title: "Delete Tag",
                confirmation: "Are you sure you want to delete this tag? It will be deleted throughout all assets \
                and any regions where this is the only tag will also be deleted",
            },
        },
        canvas: {
            removeAllRegions: {
                title: "Remove All Regions",
                confirmation: "Are you sure you want to remove all regions?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "Invalid region(s) detected",
                description: "1 or more regions have not been tagged.  Ensure all regions are tagged before \
                    continuing to next asset.",
            },
        },
    },
    export: {
        title: "Export",
        settings: "Export Settings",
        saveSettings: "Save Export Settings",
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "Asset State",
                        description: "Which assets to include in the export",
                        options: {
                            all: "All Assets",
                            visited: "Only Visited Assets",
                            tagged: "Only tagged Assets",
                        },
                    },
                    testTrainSplit: {
                        title: "Test / Train Split",
                        description: "The test train split to use for exported data",
                    },
                    includeImages: {
                        title: "Include Images",
                        description: "Whether or not to include binary image assets in target connection",
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON",
            },
            azureCV: {
                displayName: "Azure Custom Vision Service",
                regions: {
                    australiaEast: "Australia East",
                    centralIndia: "Central India",
                    eastUs: "East US",
                    eastUs2: "East US 2",
                    japanEast: "Japan East",
                    northCentralUs: "North Central US",
                    northEurope: "North Europe",
                    southCentralUs: "South Central US",
                    southeastAsia: "Southeast Asia",
                    ukSouth: "UK South",
                    westUs2: "West US 2",
                    westEurope: "West Europe",
                },
                properties: {
                    apiKey: {
                        title: "API Key",
                    },
                    region: {
                        title: "Region",
                        description: "The Azure region where your service is deployed",
                    },
                    classificationType: {
                        title: "Classification Type",
                        options: {
                            multiLabel: "Multiple tags per image",
                            multiClass: "Single tag per image",
                        },
                    },
                    name: {
                        title: "Project Name",
                    },
                    description: {
                        title: "Project Description",
                    },
                    domainId: {
                        title: "Domain",
                    },
                    newOrExisting: {
                        title: "New or Existing Project",
                        options: {
                            new: "New Project",
                            existing: "Existing Project",
                        },
                    },
                    projectId: {
                        title: "Project Name",
                    },
                    projectType: {
                        title: "Project Type",
                        options: {
                            classification: "Classification",
                            objectDetection: "Object Detection",
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "Tensorflow Records",
            },
            pascalVoc: {
                displayName: "Pascal VOC",
                exportUnassigned: {
                    title: "Export Unassigned",
                    description: "Whether or not to include unassigned tags in exported data",
                },
            },
            cntk: {
                displayName: "Microsoft Cognitive Toolkit (CNTK)",
            },
            csv: {
                displayName: "Comma Separated Values (CSV)",
            },
        },
        messages: {
            saveSuccess: "Successfully saved export settings",
        },
    },
    activeLearning: {
        title: "Active Learning",
        form: {
            properties: {
                modelPathType: {
                    title: "Model Provider",
                    description: "Where to load the training model from",
                    options: {
                        preTrained: "Pre-trained Coco SSD",
                        customFilePath: "Custom (File path)",
                        customWebUrl: "Custom (Url)",
                    },
                },
                autoDetect: {
                    title: "Auto Detect",
                    description: "Whether or not to automatically make predictions as you navigate between assets",
                },
                modelPath: {
                    title: "Model path",
                    description: "Select a model from your local file system",
                },
                modelUrl: {
                    title: "Model URL",
                    description: "Load your model from a public web URL",
                },
                predictTag: {
                    title: "Predict Tag",
                    description: "Whether or not to automatically include tags in predictions",
                },
            },
        },
        messages: {
            loadingModel: "Loading active learning model...",
            errorLoadModel: "Error loading active learning model",
            saveSuccess: "Successfully saved active learning settings",
        },
    },
    profile: {
        settings: "Profile Settings",
    },
    errors: {
        unknown: {
            title: "Unknown Error",
            message: "The app encountered an unknown error. Please try again.",
        },
        projectUploadError: {
            title: "Error Uploading File",
            message: `There was an error uploading the file.
                Please verify the file is of the correct format and try again.`,
        },
        genericRenderError: {
            title: "Error Loading Application",
            message: "An error occured while rendering the application. Please try again",
        },
        projectInvalidSecurityToken: {
            title: "Error loading project file",
            message: `The security token referenced by the project is invalid.
                Verify that the security token for the project has been set correctly within your application settings`,
        },
        projectInvalidJson: {
            title: "Error parsing project file",
            message: "The selected project files does not contain valid JSON. Please check the file any try again.",
        },
        projectDeleteError: {
            title: "Error deleting project",
            message: `An error occured while deleting the project.
                Validate the project file and security token exist and try again`,
        },
        securityTokenNotFound: {
            title: "Error loading project file",
            message: `The security token referenced by the project cannot be found in your current application settings.
                Verify the security token exists and try to reload the project.`,
        },
        canvasError: {
            title: "Error loading canvas",
            message: "There was an error loading the canvas, check the project's assets and try again.",
        },
        importError: {
            title: "Error importing V1 project",
            message: "There was an error importing the V1 project. Check the project file and try again",
        },
        pasteRegionTooBigError: {
            title: "Error pasting region",
            message: "Region too big for this asset. Try copying another region",
        },
        exportFormatNotFound: {
            title: "Error exporting project",
            message: "Project is missing export format.  Please select an export format in the export setting page.",
        },
        activeLearningPredictionError: {
            title: "Active Learning Error",
            message: "An error occurred while predicting regions in the current asset. \
                Please verify your active learning configuration and try again",
        },
    },
};

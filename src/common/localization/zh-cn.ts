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
        title: "项目指标",
        assetsSectionTitle: "资源",
        totalAssetCount: "资源总计",
        visitedAssets: "查看资源 (${count})",
        taggedAssets: "标记资源 (${count})",
        nonTaggedAssets: "未标记资源 (${count})",
        nonVisitedAssets: "未查看资源 (${count})",
        tagsSectionTitle: "标签",
        totalRegionCount: "标记区域总计",
        totalTagCount: "标签总计",
        avgTagCountPerAsset: "资源平均标记",
    },
    tags: {
        title: "标签",
        placeholder: "添加一个新标签",
        editor: "编辑标签",
        modal: {
            name: "标签名",
            color: "标签颜色",
        },
        colors: {
            white: "白色",
            gray: "灰色",
            red: "红色",
            maroon: "栗色",
            yellow: "黄色",
            olive: "橄榄色",
            lime: "青柠绿",
            green: "绿色",
            aqua: "湖绿色",
            teal: "鸭翅绿",
            blue: "蓝色",
            navy: "藏青色",
            fuschia: "桃红色",
            purple: "紫色",
        },
        warnings: {
            existingName: "标签名称已存在 选择其他名称",
            emptyName: "标签名不能为空",
            unknownTagName: "未知",
        },
        toolbar: {
            import: "导入标签",
            add: "添加新标签",
            search: "搜索标签",
            edit: "编辑标签",
            lock: "锁定标签",
            moveUp: "向上移动标签",
            moveDown: "向下移动标签",
            delete: "删除标签",
        },
    },
    connections: {
        title: "连接",
        details: "连接详情",
        settings: "连接设置",
        instructions: "请选择一个连接编辑",
        save: "保存连接",
        messages: {
            saveSuccess: "保存 ${connection.name} 成功",
            deleteSuccess: "保存 ${connection.name} 失败",
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
                title: "本地文件系统",
                folderPath: "文件夹路径",
                selectFolder: "选择文件夹",
                chooseFolder: "选择文件夹",
            },
        },
    },
    editorPage: {
        width: "宽",
        height: "高",
        tagged: "已标记",
        visited: "已标记",
        toolbar: {
            select: "选择",
            pan: "Pan",
            drawRectangle: "绘制矩形",
            drawPolygon: "绘制多边形",
            copyRectangle: "复制矩形",
            copy: "复制区域",
            cut: "剪切区域",
            paste: "粘贴区域",
            removeAllRegions: "删除所有区域",
            previousAsset: "上一个资源",
            nextAsset: "下一个资源",
            saveProject: "保存项目",
            exportProject: "导出项目",
            activeLearning: "Active Learning",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "上一个标记帧",
            },
            nextTaggedFrame: {
                tooltip: "下一个标记帧",
            },
            previousExpectedFrame: {
                tooltip: "上一帧",
            },
            nextExpectedFrame: {
                tooltip: "下一帧",
            },
        },
        help: {
            title: "打开帮助菜单",
            escape: "关闭帮助菜单",
        },
        assetError: "无法加载资源",
        tags: {
            hotKey: {
                apply: "使用快捷键应用标签",
                lock: "使用快捷键锁定标签",
            },
            rename: {
                title: "重命名标签",
                confirmation: "您确定要重命名此标签吗？ 它将在所有资源中重命名",
            },
            delete: {
                title: "删除标签",
                confirmation: "您确定要删除此标签吗？ 它将在所有资源中删除，并且任何区域也将被删除",
            },
        },
        canvas: {
            removeAllRegions: {
                title: "删除所有区域",
                confirmation: "您确定要删除所有区域吗?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "检测到无效区域",
                description: "尚未标记1个或多个区域 确保在继续下一个资产之前标记所有区域",
            },
        },
    },
    export: {
        title: "导出",
        settings: "导出设置",
        saveSettings: "保存导出设置",
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "资源状态",
                        description: "Which assets to include in the export",
                        options: {
                            all: "所有资源",
                            visited: "已访问标签",
                            tagged: "已标记资源",
                        },
                    },
                    testTrainSplit: {
                        title: "测试 / 训练集分配",
                        description: "用于导出数据的测试训练集分配比例",
                    },
                    includeImages: {
                        title: "导出图像",
                        description: "是否在目标连接中导出图像资源",
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

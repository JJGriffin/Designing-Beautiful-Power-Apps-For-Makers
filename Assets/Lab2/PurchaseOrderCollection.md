
## Collection for the Purchase Orders 

### Copy Named Formula references below


    nfcolMorePurchaseOrder = 

    Table(
        {
            vendorId: "Vendor001",
            coh_account: "Acme Corp",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12345",
            warehouseId: "WH001",
            result: "Success",
            LastModified: DateAdd(Today(), -5, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 10
        },
        {
            vendorId: "Vendor002",
            coh_account: "Global Supplies",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO67890",
            warehouseId: "WH002",
            result: "Pending",
            LastModified: DateAdd(Today(), -3, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Email",
            linesCount: 5
        },
        {
            vendorId: "Vendor003",
            coh_account: "Tech Distributors",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO11223",
            warehouseId: "WH003",
            result: "Failed",
            LastModified: DateAdd(Today(), -7, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 15
        },
        {
            vendorId: "Vendor004",
            coh_account: "FastTrack Logistics",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO44556",
            warehouseId: "WH004",
            result: "Success",
            LastModified: DateAdd(Today(), -1, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Courier",
            linesCount: 8
        },
        {
            vendorId: "Vendor005",
            coh_account: "Northern Lights",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO77889",
            warehouseId: "WH005",
            result: "Pending",
            LastModified: DateAdd(Today(), -2, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Email",
            linesCount: 20
        },
        // Additional Rows with Mixed Datasources
        {
            vendorId: "Vendor011",
            coh_account: "Skyline Supplies",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO33456",
            warehouseId: "WH011",
            result: "Success",
            LastModified: DateAdd(Today(), -6, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 13
        },
        {
            vendorId: "Vendor012",
            coh_account: "NextGen Industries",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO77801",
            warehouseId: "WH012",
            result: "Failed",
            LastModified: DateAdd(Today(), -4, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Email",
            linesCount: 6
        },
        {
            vendorId: "Vendor013",
            coh_account: "Alpha Distributors",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO88912",
            warehouseId: "WH013",
            result: "Pending",
            LastModified: DateAdd(Today(), -9, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 9
        },
        {
            vendorId: "Vendor014",
            coh_account: "Unified Logistics",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO99865",
            warehouseId: "WH014",
            result: "Success",
            LastModified: DateAdd(Today(), -8, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Courier",
            linesCount: 11
        },
        {
            vendorId: "Vendor015",
            coh_account: "Bright Horizons",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12945",
            warehouseId: "WH015",
            result: "Failed",
            LastModified: DateAdd(Today(), -10, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Email",
            linesCount: 4
        }
    ); 
    
    nfcolPurchaseOrders =

    Table(
        {
            vendorId: "V001",
            coh_account: "Vendor A",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12345",
            warehouseId: "WH01",
            result: "Pending",
            LastModified: DateAdd(
                Now(),
                -2,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Truck",
            linesCount: 10
        },
        {
            vendorId: "V002",
            coh_account: "Vendor B",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12346",
            warehouseId: "WH02",
            result: "Approved",
            LastModified: DateAdd(
                Now(),
                -5,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Air",
            linesCount: 5
        },
        {
            vendorId: "V003",
            coh_account: "Vendor C",
            manuallyProcessedInApp: true,
            coh_purchaseordernumber: "PO12347",
            warehouseId: "WH03",
            result: "Rejected",
            LastModified: DateAdd(
                Now(),
                -10,
                TimeUnit.Days
            ),
            Datasource: "Sharepoint",
            deliveryMethod: "Sea",
            linesCount: 15
        },
        {
            vendorId: "V004",
            coh_account: "Vendor D",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12348",
            warehouseId: "WH04",
            result: "Pending",
            LastModified: DateAdd(
                Now(),
                -1,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Truck",
            linesCount: 20
        },
        {
            vendorId: "V005",
            coh_account: "Vendor E",
            manuallyProcessedInApp: true,
            coh_purchaseordernumber: "PO12349",
            warehouseId: "WH05",
            result: "Approved",
            LastModified: Now(),
            Datasource: "Sharepoint",
            deliveryMethod: "Drone",
            linesCount: 8
        },
        {
            vendorId: "Vendor001",
            coh_account: "Acme Corp",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12345",
            warehouseId: "WH001",
            result: "Success",
            LastModified: DateAdd(
                Now(),
                -5,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 10
        },
        {
            vendorId: "Vendor002",
            coh_account: "Global Supplies",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO67890",
            warehouseId: "WH002",
            result: "Pending",
            LastModified: DateAdd(
                Now(),
                -3,
                TimeUnit.Days
            ),
            Datasource: "Sharepoint",
            deliveryMethod: "Email",
            linesCount: 5
        },
        {
            vendorId: "Vendor003",
            coh_account: "Tech Distributors",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO11223",
            warehouseId: "WH003",
            result: "Failed",
            LastModified: DateAdd(
                Now(),
                -7,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 15
        },
        {
            vendorId: "Vendor004",
            coh_account: "FastTrack Logistics",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO44556",
            warehouseId: "WH004",
            result: "Success",
            LastModified: DateAdd(
                Now(),
                -1,
                TimeUnit.Days
            ),
            Datasource: "Sharepoint",
            deliveryMethod: "Courier",
            linesCount: 8
        },
        {
            vendorId: "Vendor005",
            coh_account: "Northern Lights",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO77889",
            warehouseId: "WH005",
            result: "Pending",
            LastModified: DateAdd(
                Now(),
                -2,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Email",
            linesCount: 20
        },
        // Additional Rows
        {
            vendorId: "Vendor006",
            coh_account: "NextGen Supplies",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO33445",
            warehouseId: "WH006",
            result: "Success",
            LastModified: DateAdd(
                Now(),
                -6,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 12
        },
        {
            vendorId: "Vendor007",
            coh_account: "Alpha Distributors",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO55667",
            warehouseId: "WH007",
            result: "Failed",
            LastModified: DateAdd(
                Now(),
                -4,
                TimeUnit.Days
            ),
            Datasource: "Sharepoint",
            deliveryMethod: "Email",
            linesCount: 6
        },
        {
            vendorId: "Vendor008",
            coh_account: "Global Traders",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO88990",
            warehouseId: "WH008",
            result: "Pending",
            LastModified: DateAdd(
                Now(),
                -9,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 9
        },
        {
            vendorId: "Vendor009",
            coh_account: "Pro Logistics",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO99887",
            warehouseId: "WH009",
            result: "Success",
            LastModified: DateAdd(
                Now(),
                -8,
                TimeUnit.Days
            ),
            Datasource: "Sharepoint",
            deliveryMethod: "Courier",
            linesCount: 11
        },
        {
            vendorId: "Vendor010",
            coh_account: "Blue Horizons",
            manuallyProcessedInApp: false,
            coh_purchaseordernumber: "PO12399",
            warehouseId: "WH010",
            result: "Failed",
            LastModified: DateAdd(
                Now(),
                -10,
                TimeUnit.Days
            ),
            Datasource: "Dataverse",
            deliveryMethod: "Email",
            linesCount: 4
        }
    );



## Collection for the Purchase orders 

### Copy Named Formula references below


    nfcolMorePurchaseOrder = 

    Table(
        {
            vendorId: "Vendor001",
            vendorName: "Acme Corp",
            manuallyProcessedInApp: false,
            poNumber: "PO12345",
            warehouseId: "WH001",
            result: "Success",
            LastModified: DateAdd(Today(), -5, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 10
        },
        {
            vendorId: "Vendor002",
            vendorName: "Global Supplies",
            manuallyProcessedInApp: false,
            poNumber: "PO67890",
            warehouseId: "WH002",
            result: "Pending",
            LastModified: DateAdd(Today(), -3, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Email",
            linesCount: 5
        },
        {
            vendorId: "Vendor003",
            vendorName: "Tech Distributors",
            manuallyProcessedInApp: false,
            poNumber: "PO11223",
            warehouseId: "WH003",
            result: "Failed",
            LastModified: DateAdd(Today(), -7, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 15
        },
        {
            vendorId: "Vendor004",
            vendorName: "FastTrack Logistics",
            manuallyProcessedInApp: false,
            poNumber: "PO44556",
            warehouseId: "WH004",
            result: "Success",
            LastModified: DateAdd(Today(), -1, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Courier",
            linesCount: 8
        },
        {
            vendorId: "Vendor005",
            vendorName: "Northern Lights",
            manuallyProcessedInApp: false,
            poNumber: "PO77889",
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
            vendorName: "Skyline Supplies",
            manuallyProcessedInApp: false,
            poNumber: "PO33456",
            warehouseId: "WH011",
            result: "Success",
            LastModified: DateAdd(Today(), -6, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "Courier",
            linesCount: 13
        },
        {
            vendorId: "Vendor012",
            vendorName: "NextGen Industries",
            manuallyProcessedInApp: false,
            poNumber: "PO77801",
            warehouseId: "WH012",
            result: "Failed",
            LastModified: DateAdd(Today(), -4, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Email",
            linesCount: 6
        },
        {
            vendorId: "Vendor013",
            vendorName: "Alpha Distributors",
            manuallyProcessedInApp: false,
            poNumber: "PO88912",
            warehouseId: "WH013",
            result: "Pending",
            LastModified: DateAdd(Today(), -9, TimeUnit.Days),
            Datasource: "Dataverse",
            deliveryMethod: "FTP",
            linesCount: 9
        },
        {
            vendorId: "Vendor014",
            vendorName: "Unified Logistics",
            manuallyProcessedInApp: false,
            poNumber: "PO99865",
            warehouseId: "WH014",
            result: "Success",
            LastModified: DateAdd(Today(), -8, TimeUnit.Days),
            Datasource: "SharePoint",
            deliveryMethod: "Courier",
            linesCount: 11
        },
        {
            vendorId: "Vendor015",
            vendorName: "Bright Horizons",
            manuallyProcessedInApp: false,
            poNumber: "PO12945",
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
            vendorName: "Vendor A",
            manuallyProcessedInApp: false,
            poNumber: "PO12345",
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
            vendorName: "Vendor B",
            manuallyProcessedInApp: false,
            poNumber: "PO12346",
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
            vendorName: "Vendor C",
            manuallyProcessedInApp: true,
            poNumber: "PO12347",
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
            vendorName: "Vendor D",
            manuallyProcessedInApp: false,
            poNumber: "PO12348",
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
            vendorName: "Vendor E",
            manuallyProcessedInApp: true,
            poNumber: "PO12349",
            warehouseId: "WH05",
            result: "Approved",
            LastModified: Now(),
            Datasource: "Sharepoint",
            deliveryMethod: "Drone",
            linesCount: 8
        },
        {
            vendorId: "Vendor001",
            vendorName: "Acme Corp",
            manuallyProcessedInApp: false,
            poNumber: "PO12345",
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
            vendorName: "Global Supplies",
            manuallyProcessedInApp: false,
            poNumber: "PO67890",
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
            vendorName: "Tech Distributors",
            manuallyProcessedInApp: false,
            poNumber: "PO11223",
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
            vendorName: "FastTrack Logistics",
            manuallyProcessedInApp: false,
            poNumber: "PO44556",
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
            vendorName: "Northern Lights",
            manuallyProcessedInApp: false,
            poNumber: "PO77889",
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
            vendorName: "NextGen Supplies",
            manuallyProcessedInApp: false,
            poNumber: "PO33445",
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
            vendorName: "Alpha Distributors",
            manuallyProcessedInApp: false,
            poNumber: "PO55667",
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
            vendorName: "Global Traders",
            manuallyProcessedInApp: false,
            poNumber: "PO88990",
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
            vendorName: "Pro Logistics",
            manuallyProcessedInApp: false,
            poNumber: "PO99887",
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
            vendorName: "Blue Horizons",
            manuallyProcessedInApp: false,
            poNumber: "PO12399",
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


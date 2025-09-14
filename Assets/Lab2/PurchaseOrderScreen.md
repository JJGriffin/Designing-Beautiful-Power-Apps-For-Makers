YAML for the Purchase Order Screen

Screens:
  PurchaseOrders:
    Properties:
      Fill: =RGBA(255, 255, 255, 1)
      LoadingSpinnerColor: =RGBA(0, 120, 212, 1)
    Children:
      - cntMainVerticalPO:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            Fill: =RGBA(250, 250, 250, 1)
            Height: =Parent.Height
            LayoutAlignItems: =LayoutAlignItems.Stretch
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =16
            PaddingBottom: =16
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =16
            Width: =Parent.Width
          Children:
            - cntHeaderHorizontal:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  Fill: =RGBA(255, 255, 255, 1)
                  FillPortions: =0
                  Height: =100
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutGap: =5
                Children:
                  - Icon16_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        AlignInContainer: =AlignInContainer.Stretch
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =RGBA(0, 0, 0, 1)
                        Icon: =Icon.BackArrow
                        OnSelect: =Back()
                        PaddingBottom: =10
                        PaddingLeft: =10
                        PaddingRight: =10
                        PaddingTop: =10
                  - Label52_4:
                      Control: Label@2.5.1
                      Properties:
                        AlignInContainer: =AlignInContainer.Stretch
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Font: =Font.'Segoe UI'
                        FontWeight: =FontWeight.Semibold
                        LayoutMinWidth: =10
                        Size: =25
                        Text: =
                        Width: =15
                  - cntHeaderVerticalPO:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutMinHeight: =Parent.LayoutMinHeight
                      Children:
                        - Label52_9:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =ColorFade(ColorValue(nfBackgroundColor),-20%)
                              Font: =nfFont
                              FontWeight: =FontWeight.Semibold
                              Height: =Parent.Height/2
                              Size: =25
                              Text: ="PURCHASE ORDERS"
                              Width: =Parent.Width
                        - Label52_10:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              AutoHeight: =true
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Font: =nfFont
                              FontWeight: =FontWeight.Semibold
                              Height: =Parent.Height/2
                              LayoutMinHeight: =30
                              Size: =15
                              Text: ="ERP data in model-driven apps"
                              Width: =Parent.Width
                              Wrap: =false
                  - cntHeaderVertical2PO:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        LayoutAlignItems: =LayoutAlignItems.End
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutMinHeight: =50
            - cntFilterHorizontal:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  Fill: =RGBA(247, 247, 247, 1)
                  FillPortions: =0
                  Height: =80
                  LayoutAlignItems: =LayoutAlignItems.Stretch
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutGap: =3
                  LayoutMinHeight: =20
                  PaddingBottom: =5
                  PaddingLeft: =3
                  PaddingRight: =3
                  PaddingTop: =5
                Children:
                  - cnt_FetchNewData_9:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                        LayoutMinHeight: =Parent.Height-10
                        LayoutMinWidth: =290
                      Children:
                        - cnt_IONumber_16:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              FillPortions: =0.6
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/3
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                            Children:
                              - Label1_21:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    LayoutMinWidth: =8
                                    Text: =""
                                    Width: =10
                              - Icon20_5:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(53, 61, 63, 1)
                                    Height: =Parent.Height
                                    Icon: =Icon.Search
                                    OnSelect: =Select(Label54_8)
                                    PaddingBottom: =3
                                    PaddingLeft: =3
                                    PaddingRight: =3
                                    PaddingTop: =3
                                    Width: =20
                              - Label54_8:
                                  Control: Label@2.5.1
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    AutoHeight: =true
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(116, 116, 116, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    Italic: =true
                                    OnSelect: =
                                    Size: =11
                                    Text: ="Search"
                                    Width: =120
                                    Wrap: =false
                        - cnt_IONumber_4:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/2
                            Children:
                              - Label1_22:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    Text: =""
                                    Width: =10
                              - txtSearchIONumber_OnPrem_1:
                                  Control: Classic/TextInput@2.3.2
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Center
                                    BorderColor: =RGBA(219, 219, 219, 1)
                                    BorderThickness: =1
                                    Clear: =true
                                    Default: =""
                                    FillPortions: =0.9
                                    FocusedBorderThickness: =1
                                    Font: =Font.'Segoe UI'
                                    Height: =Parent.Height-10
                                    HintText: ="Search for vendor or Purchase Order Number..."
                                    HoverBorderColor: =RGBA(51, 51, 51, 1)
                                    HoverFill: =RGBA(247, 247, 247, 0.24)
                                    LayoutMinWidth: =210
                                    OnChange: =
                                    OnSelect: =
                                    PaddingLeft: =5
                                    Size: =12
                                    Width: =210
                  - Label1_12:
                      Control: Label@2.5.1
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        LayoutMinWidth: =8
                        Text: =""
                        Width: =10
                  - cnt_FetchNewData_10:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                        LayoutMinHeight: =Parent.Height-10
                        LayoutMinWidth: =200
                      Children:
                        - cnt_IONumber_17:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              FillPortions: =0.6
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/3
                              LayoutMinWidth: =Parent.Width
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                            Children:
                              - Label1_13:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    LayoutMinWidth: =8
                                    Text: =""
                                    Width: =10
                              - Icon20_6:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(53, 61, 63, 1)
                                    Height: =Parent.Height
                                    Icon: =Icon.CalendarBlank
                                    OnSelect: =Select(Label54_9)
                                    PaddingBottom: =3
                                    PaddingLeft: =3
                                    PaddingRight: =3
                                    PaddingTop: =3
                                    Width: =20
                              - Label54_9:
                                  Control: Label@2.5.1
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    AutoHeight: =true
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(116, 116, 116, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    Italic: =true
                                    OnSelect: =
                                    Size: =11
                                    Text: ="Show orders from date"
                                    Width: =120
                                    Wrap: =false
                        - cnt_IONumber_18:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/2
                              LayoutMinWidth: =Parent.Width
                            Children:
                              - Label1_6:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Font: =Font.'Open Sans'
                                    LayoutMinWidth: =10
                                    Text: =""
                                    Width: =10
                              - dtepicker_POFromDate_1:
                                  Control: Classic/DatePicker@2.6.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Center
                                    BorderColor: =RGBA(237, 237, 237, 1)
                                    ContentLanguage: |-
                                      =//"nb-NO"
                                      Language()
                                    DefaultDate: =Blank()
                                    Font: =Font.'Segoe UI'
                                    Height: =Parent.Height-10
                                    IconBackground: =Color.White
                                    IconFill: =RGBA(168, 0, 0, 1)
                                    Language: ="nb-NO"
                                    LayoutMinWidth: =200
                                    OnChange: =
                                    OnSelect: =
                                    PaddingRight: =12
                                    Size: =12
                                    StartOfWeek: =StartOfWeek.Monday
                                    Tooltip: ="Fra dato"
                                    Width: =170
                  - Label1_23:
                      Control: Label@2.5.1
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        LayoutMinWidth: =8
                        Text: =""
                        Width: =10
                  - cnt_FetchNewData_18:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                        LayoutMinHeight: =Parent.Height-10
                        LayoutMinWidth: =150
                      Children:
                        - cnt_IONumber_35:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              FillPortions: =0.6
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/3
                              LayoutMinWidth: =Parent.Width
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                            Children:
                              - Icon20_11:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(53, 61, 63, 1)
                                    Height: =Parent.Height
                                    Icon: =Icon.Copy
                                    OnSelect: =Select(Label54_22)
                                    PaddingBottom: =3
                                    PaddingLeft: =3
                                    PaddingRight: =3
                                    PaddingTop: =3
                                    Width: =20
                              - Label54_22:
                                  Control: Label@2.5.1
                                  Properties:
                                    AlignInContainer: =AlignInContainer.End
                                    AutoHeight: =true
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(116, 116, 116, 1)
                                    Font: =Font.'Segoe UI'
                                    Italic: =true
                                    LayoutMinWidth: =120
                                    OnSelect: =
                                    Size: =11
                                    Text: ="Number of records"
                                    Width: =160
                                    Wrap: =false
                        - cnt_IONumber_36:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =1
                              LayoutMinHeight: =Parent.Height/2
                              LayoutMinWidth: =100
                            Children:
                              - Label1_17:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    LayoutMinWidth: =8
                                    Text: =""
                                    Width: =10
                              - drpdwn_NumberofItems_4:
                                  Control: Classic/DropDown@2.3.1
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Center
                                    BorderColor: =RGBA(214, 221, 224, 1)
                                    BorderThickness: =1
                                    ChevronBackground: =RGBA(255, 255, 255, 1)
                                    ChevronFill: =RGBA(168, 0, 0, 1)
                                    ChevronHoverBackground: =ColorFade(Self.ChevronFill, -20%)
                                    ChevronHoverFill: =RGBA(255, 255, 255, 1)
                                    Font: =Font.'Segoe UI'
                                    Height: =Parent.Height-10
                                    HoverBorderColor: =ColorFade(Self.ChevronFill, 15%)
                                    HoverColor: =RGBA(255, 255, 255, 1)
                                    HoverFill: =ColorFade(Self.ChevronFill,60%)
                                    Items: =[25,50,100,250,500,1000,1500]
                                    Items.Value: =Value
                                    OnChange: |-
                                      =false
                                      //Denne bestemmer hvor mange items man ønsker å se listen. Flere Items gir treggere app i prosessreingsiden. Anbefaller å arbeide med max 100 av gangen. Flere enn det bør være for kun å få oversikt.
                                    OnSelect: |-
                                      =false
                                      //Denne bestemmer hvor mange items man ønsker å se listen. Flere Items gir treggere app i prosessreingsiden. Anbefaller å arbeide med max 100 av gangen. Flere enn det bør være for kun å få oversikt
                                    PressedColor: =RGBA(255, 255, 255, 1)
                                    PressedFill: =Self.ChevronFill
                                    SelectionColor: =RGBA(255, 255, 255, 1)
                                    SelectionFill: =RGBA(238, 204, 204, 1)
                                    Size: =12
                                    Width: =120
                  - cnt_notHandled_2:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutMinHeight: =50
                        LayoutMinWidth: =50
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =100
                      Children:
                        - icnNotHandled_2:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              AlignInContainer: =AlignInContainer.Stretch
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =Color.DarkGreen
                              FillPortions: =1
                              Height: =45
                              HoverColor: =ColorFade(Self.Color, 80%)
                              Icon: =Icon.Search
                              LayoutMinHeight: =50
                              OnSelect: |-
                                =UpdateContext({ucShowProcessed: false});
                                UpdateContext({ucSortColumn:"LastModified"});
                                UpdateContext({ucSortOrder: false});
                                UpdateContext({ucSearch:true});
                                Collect(
                                    colPurchaseOrders,
                                        Filter(
                                            SortByColumns(
                                                colMorePurchaseOrder,
                                                "LastModified",
                                                SortOrder.Ascending
                                            ),
                                            IsBlank(dtepicker_POFromDate_1.SelectedDate) || LastModified >= dtepicker_POFromDate_1.SelectedDate,
                                            txtSearchIONumber_OnPrem_1.Text in poNumber || txtSearchIONumber_OnPrem_1.Text in vendorName,
                                            manuallyProcessedInApp=false
                                        )
                                );
                                Notify(
                                    "Showing orders from " & Text(First(colPurchaseOrders).LastModified,"dd.mm.yyyy - hh.mm.ss"),
                                    NotificationType.Information
                                );
                              PaddingBottom: =10
                              PaddingTop: =10
                        - lblNotHandled_2:
                            Control: Label@2.5.1
                            Properties:
                              Align: =Align.Center
                              AlignInContainer: =AlignInContainer.Center
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              LayoutMinHeight: =10
                              OnSelect: =Select(icnNotHandled_2)
                              Size: =9
                              Text: ="Search"
                              Width: =Parent.Width
                  - cnt_reset_2:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        LayoutDirection: =LayoutDirection.Vertical
                        LayoutMinHeight: =50
                        LayoutMinWidth: =30
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =100
                      Children:
                        - icnReset_2:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              AlignInContainer: =AlignInContainer.Stretch
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(168, 0, 0, 1)
                              FillPortions: =1
                              Height: =45
                              HoverColor: =ColorFade(Self.Color, 80%)
                              Icon: =Icon.Reload
                              LayoutMinHeight: =50
                              LayoutMinWidth: =50
                              OnSelect: |
                                =Reset(txtSearchIONumber_OnPrem_1);
                                Reset(dtepicker_POFromDate_1);
                                UpdateContext({ucSearch: false});
                                UpdateContext({ucShowProcessed: false});
                                UpdateContext({ucSortColumn:"LastModified"});
                                UpdateContext({ucSortOrder: true});
                              PaddingBottom: =10
                              PaddingTop: =10
                        - lblReset_2:
                            Control: Label@2.5.1
                            Properties:
                              Align: =Align.Center
                              AlignInContainer: =AlignInContainer.Center
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              LayoutMinHeight: =15
                              OnSelect: =Select(icnReset_2)
                              Size: =10
                              Text: ="Reset"
                              Width: =Parent.Width
            - cntMainBodyVerticalPO:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  LayoutDirection: =LayoutDirection.Vertical
                  LayoutGap: =1
                Children:
                  - ctn_LineHeaders_4:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        Fill: =RGBA(245, 245, 245, 1)
                        FillPortions: =0
                        Height: =40
                        LayoutAlignItems: =LayoutAlignItems.Stretch
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                        LayoutMinHeight: =10
                        RadiusBottomLeft: =2
                        RadiusBottomRight: =2
                        RadiusTopLeft: =2
                        RadiusTopRight: =2
                        Width: =galPurchaseOrders_2.TemplateWidth
                      Children:
                        - lbl_IOheader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If("ponumber" in ucSortColumn,Color.DarkRed,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =120
                              OnSelect: |-
                                =UpdateContext({ucSortOrderpoNumber:!ucSortOrderpoNumber});
                                UpdateContext({ucSortColumn:"poNumber",ucSortOrder:!ucSortOrder})
                              Size: =12
                              Text: =If("ponumber" in ucSortColumn, "⇅ PO number","PO number")
                              Width: =112
                        - lbl_DatasourceHeader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(110, 110, 110, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =130
                              Size: =12
                              Text: ="Datasource"
                              Width: =115
                        - lbl_VendorNameHeader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If("vendorname" in ucSortColumn, Color.DarkRed,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =220
                              OnSelect: =UpdateContext({ucSortColumn:"vendorName",ucSortOrder:!ucSortOrder})
                              Size: =12
                              Text: =If("vendorName" in ucSortColumn, "⇅ Vendor","Vendor")
                              Width: =250
                              Wrap: =false
                        - lbl_VendorIDHeader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If("vendorid" in ucSortColumn,Color.DarkRed,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =130
                              OnSelect: =UpdateContext({ucSortColumn:"vendorId",ucSortOrder:!ucSortOrder})
                              Size: =12
                              Text: =If("vendorId" in ucSortColumn, "⇅ ID","ID")
                              Width: =120
                        - lbl_LastModified_2:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If("LastModified" in ucSortColumn,Color.DarkRed,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              HoverFill: =ColorFade(Self.Fill, -30%)
                              LayoutMinWidth: =110
                              OnSelect: |-
                                =//Klikker på overskriften for å endre sorteringsrekkefølgen i listen
                                //If(_POlistSortOrder = SortOrder.Ascending, Set(_POlistSortOrder, SortOrder.Descending), Set(_POlistSortOrder,SortOrder.Ascending))

                                UpdateContext({ucSortColumn:"LastModified",ucSortOrder:!ucSortOrder})
                              PaddingLeft: =0
                              Size: =12
                              Text: =If("LastModified" in ucSortColumn, "⇅ Edited","Edited")
                              Width: =160
                        - lbl_ManueltProsessertHeader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If(ucShowProcessed,Color.Green,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =110
                              OnSelect: |+
                                =UpdateContext({ucShowProcessed: !ucShowProcessed});
                                UpdateContext({ucSortColumn:"manuallyProcessedInApp"});
                                UpdateContext({ucSortOrder:!ucSortOrder});

                              Size: =12
                              Text: =If(ucShowProcessed,"✔ Processed","✖ Processed")
                              Tooltip: ="Klikk her for å vise eller skjule behandlede ordrer"
                              Width: =90
                        - Icon15_4:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(194, 155, 39, 1)
                              Icon: =Icon.Warning
                              LayoutMinHeight: =40
                              LayoutMinWidth: =25
                              PaddingBottom: =5
                              PaddingLeft: =5
                              PaddingRight: =5
                              PaddingTop: =5
                              Width: =25
                        - lbl_resultHeader_4:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =If("result" in ucSortColumn,Color.DarkRed,RGBA(110, 110, 110, 1))
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =120
                              OnSelect: =UpdateContext({ucSortColumn:"result",ucSortOrder:!ucSortOrder})
                              PaddingLeft: =2
                              Size: =12
                              Text: =If("result" in ucSortColumn, "⇅ Status","Status")
                              Width: =210
                        - lbl_AvsenderHeader_6:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(110, 110, 110, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =110
                              OnSelect: |-
                                =UpdateContext({ucSortOrderLocation:!ucSortOrderLocation});
                                UpdateContext({ucSortColumn:"warehouseId",ucSortOrder:!ucSortOrder})
                              Size: =12
                              Text: ="Warehouse"
                              Width: '=100 '
                        - lbl_AvsenderHeader_9:
                            Control: Label@2.5.1
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(110, 110, 110, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =40
                              OnSelect: |-
                                =UpdateContext({ucSortOrderLines:!ucSortOrderLines});
                                UpdateContext({ucSortColumn:"linescount",ucSortOrder:!ucSortOrder})
                              Size: =12
                              Text: ="Lines"
                              Width: '=100 '
                        - lbl_AvsenderHeader_7:
                            Control: Label@2.5.1
                            Properties:
                              Align: =Align.Right
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: =RGBA(168, 0, 0, 1)
                              FillPortions: =1
                              Font: =Font.'Segoe UI'
                              FontWeight: =FontWeight.Semibold
                              LayoutMinWidth: =120
                              PaddingLeft: =10
                              PaddingRight: =15
                              Size: =12
                              Text: |-
                                ="Records: "& CountRows(galPurchaseOrders_2.AllItems)
                              Width: '=100 '
                              Wrap: =false
                  - lblErrorMessage_2:
                      Control: Label@2.5.1
                      Properties:
                        Align: =Align.Center
                        AlignInContainer: =AlignInContainer.Stretch
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Font: =Font.'Segoe UI'
                        Height: =100
                        Italic: =true
                        OnSelect: =Select(icnReset_2)
                        Text: |-
                          ="Could not find any orders, click ""Reset""" & " 👌"
                        Visible: =CountRows(galPurchaseOrders_2.AllItems)=0
                  - galPurchaseOrders_2:
                      Control: Gallery@2.15.0
                      Variant: BrowseLayout_Vertical_TwoTextOneImageVariant_ver5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Items: |-
                          =FirstN(
                              SortByColumns(
                                  Filter(
                                      Search(
                                          colPurchaseOrders,
                                          txtSearchIONumber_OnPrem_1.Text,
                                          vendorName,
                                          poNumber,
                                          warehouseId,
                                          vendorId
                                      ),
                                      LastModified >= dtepicker_POFromDate_1.SelectedDate
                                  ),
                                  ucSortColumn,
                                  If(
                                      ucSortOrder,
                                      SortOrder.Descending,
                                      SortOrder.Ascending
                                  )
                              ),
                              drpdwn_NumberofItems_4.SelectedText.Value
                          )
                        LayoutMinHeight: =10
                        TemplatePadding: =4
                        TemplateSize: =48
                        Transition: =Transition.Push
                        WrapCount: =0
                      Children:
                        - Container20_4:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              Fill: =RGBA(255, 255, 255, 0.76)
                              Height: =45
                              LayoutAlignItems: =LayoutAlignItems.Center
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                              RadiusBottomLeft: =2
                              RadiusBottomRight: =2
                              RadiusTopLeft: =2
                              RadiusTopRight: =2
                              Width: =Parent.TemplateWidth
                            Children:
                              - lbl_IO_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    LayoutMinWidth: =lbl_IOheader_4.Width
                                    OnSelect: =Select(Icon14_2)
                                    PaddingLeft: =10
                                    Size: =11
                                    Text: =ThisItem.poNumber
                                    Width: =120
                                    X: =1
                              - lbl_DataSourcevalue_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =Label52_9.Color
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    LayoutMinWidth: =lbl_DatasourceHeader_4.Width
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: "=ThisItem.Datasource\r\n//If(Len(ThisItem.poNumber) = 7,\"Optimera\", \"Dahl\") "
                                    Width: =110
                                    X: =119
                                    Y: =5
                              - lbl_VendorName_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    Height: =46
                                    LayoutMinWidth: =lbl_VendorNameHeader_4.Width
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: =Upper(Left(ThisItem.vendorName, 1)) & Lower(Mid(ThisItem.vendorName, 2, Len(ThisItem.vendorName)))
                                    Width: =250
                                    Wrap: =false
                                    X: =1001
                              - lbl_VendorID_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    LayoutMinWidth: =lbl_VendorIDHeader_4.Width
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: =ThisItem.vendorId
                                    Width: =125
                                    X: =219
                                    Y: =3
                              - lbl_lastModified_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    Height: =34
                                    LayoutMinWidth: =lbl_LastModified_2.LayoutMinWidth
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: =Text(ThisItem.LastModified, "dd.mm.yyyy")
                                    Width: =180
                                    Wrap: =false
                                    X: =645
                                    Y: =6
                              - lbl_manueltprosessert_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =If(ThisItem.manuallyProcessedInApp = false, RGBA(151,0,0,0.80) , RGBA(46, 139, 87, 0.75))
                                    Fill: =RGBA(255, 255, 255, 0)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    FontWeight: =FontWeight.Bold
                                    Italic: =true
                                    LayoutMinWidth: =110
                                    OnSelect: =Select(Icon14_2)
                                    Text: =ThisItem.manuallyProcessedInApp
                                    Width: =85
                                    X: =471
                              - lbl_result_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =If(Self.Text ="Rejected", Color.DarkRed, RGBA(0, 0, 0, 1))
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    FontWeight: =If(Self.Color = Color.DarkRed,FontWeight.Bold,FontWeight.Normal)
                                    LayoutMinWidth: =lbl_resultHeader_4.LayoutMinWidth+Icon15_4.LayoutMinWidth
                                    OnSelect: =Select(Icon14_2)
                                    Size: =10
                                    Text: =ThisItem.result
                                    Width: =250
                                    Wrap: =false
                                    X: =321
                              - lbl_ansender_4:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    LayoutMinWidth: =100
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: =ThisItem.warehouseId
                                    Width: =100
                              - lbl_ansender_7:
                                  Control: Label@2.5.1
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    FillPortions: =1
                                    Font: =Font.'Segoe UI'
                                    LayoutMinWidth: =lbl_AvsenderHeader_9.Width
                                    OnSelect: =Select(Icon14_2)
                                    Size: =11
                                    Text: =Coalesce(ThisItem.linesCount,0)
                                    Width: =100
                                    Wrap: =false
                              - Icon14_2:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =RGBA(116, 116, 116, 1)
                                    FillPortions: =1
                                    FocusedBorderThickness: =0
                                    Height: =Parent.Height
                                    Icon: =Icon.ChevronRight
                                    LayoutMinHeight: =10
                                    LayoutMinWidth: =30
                                    OnSelect: =
                                    PaddingBottom: =15
                                    PaddingLeft: =10
                                    PaddingRight: =10
                                    PaddingTop: =15

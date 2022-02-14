"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var initialProducts = [{
  id: 1,
  product_name: 'Mens Classic Fit Performance Polo', 
  price: "47.99", 
  Category: 'Shirt',
  image:'https://www.macys.com/shop/product/polo-ralph-lauren-mens-classic-fit-performance-polo?ID=12922083&pla_country=US&CAGPSPN=pla&cm_mmc=Google_Mens_PLA-_-Mens_Apparel_-_Polo_Ralph_Lauren_-_GS_Polo_Ralph_Lauren_-_Polo_Shirt-_-457879469954-_-pg1051844414_c_kclickid__kenshoo_clickid__KID_EMPTY_10881425462_105409822205_457879469954_pla-939099770627_738085135279USA__c_KID_&trackingid=403x1051844414&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Mens_PLA&m_ag=PoloRalphLauren-PoloShirt&m_cn=Mens_Apparel_-_Polo_Ralph_Lauren_-_GS&m_pi=go_cmp-10881425462_adg-105409822205_ad-457879469954_pla-939099770627_dev-c_ext-_prd-738085135279USA&gclid=CjwKCAiA9aKQBhBREiwAyGP5lcZumAtOy9KtpRMjADgx4fReQo-cxtiTLYitrUddU0a0stO1ulqw-BoCFswQAvD_BwE'
}, {
  id: 2,
  product_name: 'Polarized Sunglasses, PS 06VS 58', 
  price: "120.40", 
  Category: 'Sunglasses',
  image:'https://www.macys.com/shop/product/prada-linea-rossa-polarized-sunglasses-ps-06vs-58?ID=10559086&CategoryID=58262'
}, {
  id: 3,
  product_name: 'Mens Shorts', 
  price: "27.99", 
  Category: 'Shorts',
  image:'https://www.macys.com/shop/product/dockers-mens-ultimate-supreme-flex-stretch-solid-shorts?ID=10329136&CategoryID=3310&swatchColor=Black'
}];

var ProductTable = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  var _super = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var ProductRows = this.props.products.map(function (product) {
        return /*#__PURE__*/React.createElement(ProductRow, {
          key: product.id,
          product: product
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, ProductRows));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  var _super2 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.id), /*#__PURE__*/React.createElement("td", null, product.product_name), /*#__PURE__*/React.createElement("td", null, "$ ", product.price), /*#__PURE__*/React.createElement("td", null, product.Category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
        href: product.image,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductAdd = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductAdd, _React$Component3);

  var _super3 = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super3.call(this);
    _this.state = {
      Price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        Category: form.Category.value,
        price: this.state.Price.substring(1),
        product_name: form.product_name.value,
        image: form.IURL.value
      };
      this.props.createProduct(product);
      form.Category.value = "";
      form.Price.value = "";
      form.product_name.value = "";
      form.IURL.value = "";
    }
  }, {
    key: "handlePriceChange",
    value: function handlePriceChange(event) {
      var priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'

      this.setState({
        Price: "$".concat(priceWithoutDollar)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "productAdd",
        className: "entire-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "input-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-item"
      }, /*#__PURE__*/React.createElement("label", {
        for: "Category"
      }, "Category:"), /*#__PURE__*/React.createElement("select", {
        name: "Category",
        placeholder: "Category"
      }, /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accessories"), /*#__PURE__*/React.createElement("option", {
        value: "Shorts"
      }, "Shorts"))), /*#__PURE__*/React.createElement("div", {
        className: "form-item"
      }, /*#__PURE__*/React.createElement("label", {
        for: "Price"
      }, "Price Per Unit:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Price",
        value: this.state.Price,
        onChange: this.handlePriceChange,
        placeholder: "Price"
      }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
        className: "input-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-item"
      }, /*#__PURE__*/React.createElement("label", {
        for: "Product name"
      }, "Product Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "product_name",
        placeholder: "Product Name"
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-item"
      }, /*#__PURE__*/React.createElement("label", {
        for: "image"
      }, "Image URL:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "IURL",
        placeholder: "image"
      }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component4) {
  _inherits(ProductList, _React$Component4);

  var _super4 = _createSuper(ProductList);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _super4.call(this);
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          products: initialProducts
        });
      }, 500);
    }
  }, {
    key: "createProduct",
    value: function createProduct(product) {
      product.id = this.state.products.length + 1;
      var newProductsList = this.state.products.slice();
      newProductsList.push(product);
      this.setState({
        products: newProductsList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("p", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
        products: this.state.products
      }), /*#__PURE__*/React.createElement("p", null, "Adding new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));
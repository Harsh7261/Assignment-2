const initialProducts = [
    {
    id: 1, 
    product_name: 'Mens Classic Fit Performance Polo', 
    price: "47.99", 
    Category: 'Shirt',
    image:'https://www.macys.com/shop/product/polo-ralph-lauren-mens-classic-fit-performance-polo?ID=12922083&pla_country=US&CAGPSPN=pla&cm_mmc=Google_Mens_PLA-_-Mens_Apparel_-_Polo_Ralph_Lauren_-_GS_Polo_Ralph_Lauren_-_Polo_Shirt-_-457879469954-_-pg1051844414_c_kclickid__kenshoo_clickid__KID_EMPTY_10881425462_105409822205_457879469954_pla-939099770627_738085135279USA__c_KID_&trackingid=403x1051844414&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Mens_PLA&m_ag=PoloRalphLauren-PoloShirt&m_cn=Mens_Apparel_-_Polo_Ralph_Lauren_-_GS&m_pi=go_cmp-10881425462_adg-105409822205_ad-457879469954_pla-939099770627_dev-c_ext-_prd-738085135279USA&gclid=CjwKCAiA9aKQBhBREiwAyGP5lcZumAtOy9KtpRMjADgx4fReQo-cxtiTLYitrUddU0a0stO1ulqw-BoCFswQAvD_BwE',
    },
    {
        id: 2, 
        product_name: 'Polarized Sunglasses, PS 06VS 58', 
        price: "120.40", 
        Category: 'Sunglasses',
        image:'https://www.macys.com/shop/product/prada-linea-rossa-polarized-sunglasses-ps-06vs-58?ID=10559086&CategoryID=58262',
    },
    {
        id: 3, 
        product_name: 'Mens Shorts', 
        price: "27.99", 
        Category: 'Shorts',
        image:'https://www.macys.com/shop/product/dockers-mens-ultimate-supreme-flex-stretch-solid-shorts?ID=10329136&CategoryID=3310&swatchColor=Black',
    },
    ];


class ProductTable extends React.Component {
    
    render() {
        const ProductRows = this.props.products.map(product => 
        <ProductRow key={product.id} product={product}/>);
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductRows}
                </tbody>
            </table>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>$ {product.price}</td>
                <td>{product.Category}</td>
                <td><a href={product.image} target="_blank">View</a></td>
                {/* <td>{product.image}</td> */}
            </tr>
        );
    }
}

class ProductAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            Price: '$',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.productAdd;
        const product = {
        Category: form.Category.value, price: this.state.Price.substring(1),
        product_name: form.product_name.value, image: form.IURL.value
        }
        this.props.createProduct(product);
        form.Category.value = ""; form.Price.value = "";
        form.product_name.value=""; form.IURL.value="";
    }

    handlePriceChange(event) {
        const priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'
        this.setState({ Price: `$${priceWithoutDollar}` })
    }

    render() {
        return (
            <form name="productAdd" className="entire-form" onSubmit={this.handleSubmit}>
                <div className="input-row">
                    <div className="form-item">
                        <label for="Category">Category:</label>
                        <select name="Category" placeholder="Category">
                            <option value="Shirts">Shirts</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Shorts">Shorts</option>
                        </select>
                    </div>  
                    <div className="form-item">
                        <label for="Price">Price Per Unit:</label>
                        <input type="text" name="Price" value={this.state.Price} onChange={this.handlePriceChange} placeholder="Price" />
                    </div>
                </div>
                <br></br>
                <div className="input-row">
                    <div className="form-item">
                        <label for="Product name">Product Name:</label>
                        <input type="text" name="product_name" placeholder="Product Name" />
                    </div>
                    <div className="form-item">
                        <label for="image">Image URL:</label>
                        <input type="text" name="IURL" placeholder="image" />
                    </div>
                </div>
                <br></br>
                <button>Add Product</button>
            </form>
        );
    }
}

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
        this.setState({ products: initialProducts });
        }, 500);
    }

    createProduct(product) {
        product.id = this.state.products.length + 1;
        const newProductsList = this.state.products.slice();
        newProductsList.push(product);
        this.setState({ products: newProductsList });
    }

    
    render() {
        return (
            <React.Fragment>
                <h1>My Company Inventory</h1>
                <p>Showing all available products</p>
                <hr />
                <ProductTable products={this.state.products}/>
                <p>Adding new product to inventory</p>
                <hr />
                <ProductAdd createProduct={this.createProduct}/>
            </React.Fragment>
        );
    }
}

const element = <ProductList />;
ReactDOM.render(element, document.getElementById('contents'));
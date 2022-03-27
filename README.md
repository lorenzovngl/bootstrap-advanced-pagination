# Advanced pagination with Bootstrap

Javascript utility to enhance the use of [Bootstrap's pagination](https://getbootstrap.com/docs/4.0/components/pagination/) as explained in [this article](https://www.lorenzovainigli.com/en/2019/08/advanced-pagination-with-bootstrap/).

![Advanced pagination with Bootstrap](https://i2.wp.com/www.lorenzovainigli.com/wp-content/uploads/2019/08/cropped-pagination-2.png)

## Usage

1. Download the source file: [advanced-pagination-bootstrap.js](https://github.com/lorenzovngl/bootstrap-advanced-pagination/blob/main/src/1.0/advanced-pagination-bootstrap.js)

1. Add it to the page you want to insert the widget, below Bootstrap sources:

    ```html
    <script type="text/javascript" src="path/to/advanced-pagination-bootstrap.js"></script>
    ```

1. Create the object

    ```javascript
    let apb = new BootstrapAdvancedPagination()
    ```

1. Set the Bootstrap version you are using

    ```javascript
    apb.setBootstrapVersion("4.0.0")
    ```

1. Call the method to print the pagination widget:

    ```javascript
    apb.printWidget(selector, count, page, range)
    ```

    For example:

    ```javascript
    apb.printWidget('#pagination', 50, 15, 3)
    ```

# Advanced pagination with Bootstrap

Javascript utility to enhance the use of [Bootstrap's pagination](https://getbootstrap.com/docs/4.0/components/pagination/) as explained in [this article](https://www.lorenzovainigli.com/en/2019/08/advanced-pagination-with-bootstrap/).

![Advanced pagination with Bootstrap](https://i2.wp.com/www.lorenzovainigli.com/wp-content/uploads/2019/08/cropped-pagination-2.png)

## Usage

1. Download the source file: [advanced-pagination-bootstrap4.0.0.js](https://github.com/lorenzovngl/bootstrap-advanced-pagination/blob/main/src/advanced-pagination-bootstrap4.0.0.js)

1. Add it to the page you want to insert the widget, below Bootstrap sources:

    ```html
    <script type="text/javascript" src="path/to/advanced-pagination-bootstrap4.0.0.js"></script>
    ```

1. Call the method to print the pagination widget:

    ```javascript
    advanced_pagination(selector, count, page, range);
    ```

    Example:

    ```javascript
    advanced_pagination('#pagination', 50, 15, 3);
    ```

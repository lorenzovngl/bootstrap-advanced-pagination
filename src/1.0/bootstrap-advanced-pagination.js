/**
 * Advanced Bootstrap Pagination with Bootstrap
 * 
 * @author Lorenzo Vainigli
 * @version 1.0
 * @license MIT
 */

class BootstrapAdvancedPagination {

    setBootstrapVersion(version) {
        this.version = version
    }

    /**
     * Renders the pagination widget
     * 
     * @param selector  the css selector of the element in which the widget must be displayed
     * @param count     the total number of pages in the widget
     * @param page      the index of the current page
     * @param range     how many page indexes to show next to the index of the current page
     */
    printWidget(selector, count, page, range) {
        switch (this.version) {
            case "4.0.0":
                this.advanced_pagination_bootstrap_4_0_0(selector, count, page, range)
                break
            default:
                console.error("Bootstrap Advanced Pagination: unsupported Bootstrap version")
                break
        }
    }

    /**
     * Renders the pagination widget for Bootstrap 4.0.0. 
     * Don't call this method, use BootstrapAdvancedPagination.printWidget() instead.
     * 
     * @param selector  the css selector of the element in which the widget must be displayed
     * @param count     the total number of pages in the widget
     * @param page      the index of the current page
     * @param range     how many page indexes to show next to the index of the current page
     */
    advanced_pagination_bootstrap_4_0_0(selector, count, page, range) {
        let html = '<nav><ul class="pagination">';
        if (page > 1) {
            html += '<li class="page-item"><a class="page-link" href="./' + (page - 1) + '">Previous</a></li>';
        }
        for (let i = 1; i <= count; i++) {
            if (i == 1 && page - range > 1) {
                html += '<li class="page-item"><a class="page-link" href="./1">1</a></li>';
                if (page - range > 2) {
                    html += '<li class="page-item disabled"><a class="page-link" href="#">...</a></li>';
                }
            }
            if (i >= page - range && i <= page + range) {
                if (i != page) {
                    html += '<li class="page-item"><a class="page-link" href="./' + i + '">' + i + '</a></li>';
                } else {
                    html += '<li class="page-item active"><a class="page-link" href=""./' + i + '"">' + i + '</a></li>';
                }
            }
            if (i == count && page + range < count) {
                if (page + range < count - 1) {
                    html += '<li class="page-item disabled"><a class="page-link" href="#">...</a></li>';
                }
                html += '<li class="page-item"><a class="page-link" href="./' + count + '">' + count + '</a></li>';
            }
        }
        if (page < count) {
            html += '<li class="page-item"><a class="page-link" href="./' + (page + 1) + '">Next</a></li>';
        }
        html += '</ul></nav>';
        $(selector).html(html);
    }
}
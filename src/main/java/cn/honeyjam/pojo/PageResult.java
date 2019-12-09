package cn.honeyjam.pojo;

import java.util.List;

public class PageResult<T> {
    private Integer currentPage;
    private Integer rows;
    private List<T> list;
    private Long totalPages; //总页数
    private Long totalCount; //总条数

    public PageResult(Integer currentPage, Integer rows, List<T> list, Long totalPages, Long totalCount) {
        this.currentPage = currentPage;
        this.rows = rows;
        this.list = list;
        this.totalPages = totalPages;
        this.totalCount = totalCount;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }

    @Override
    public String toString() {
        return "PageResult{" +
                "currentPage=" + currentPage +
                ", rows=" + rows +
                ", list=" + list +
                ", totalPages=" + totalPages +
                '}';
    }

    public Long getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Long totalPages) {
        this.totalPages = totalPages;
    }


    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getRows() {
        return rows;
    }

    public void setRows(Integer rows) {
        this.rows = rows;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }


}

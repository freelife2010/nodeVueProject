<template>
<div id="system">
<div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <h1><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> Laravel Log Viewer</h1>
          <p class="text-muted"><i>by Rap2h</i></p>
          <div class="list-group">
                          <a href="?l=cGF5cGFsLmxvZw==" class="list-group-item  llv-active ">
                paypal.log
              </a>
                          <a href="?l=bGFyYXZlbC0yMDE3LTAzLTE0LmxvZw==" class="list-group-item ">
                laravel-2017-03-14.log
              </a>
                          <a href="?l=bGFyYXZlbC0yMDE3LTAzLTEzLmxvZw==" class="list-group-item ">
                laravel-2017-03-13.log
              </a>
                          <a href="?l=bGFyYXZlbC0yMDE3LTAzLTEyLmxvZw==" class="list-group-item ">
                laravel-2017-03-12.log
              </a>
                          <a href="?l=bGFyYXZlbC0yMDE3LTAzLTExLmxvZw==" class="list-group-item ">
                laravel-2017-03-11.log
              </a>
                          <a href="?l=bGFyYXZlbC0yMDE3LTAzLTEwLmxvZw==" class="list-group-item ">
                laravel-2017-03-10.log
              </a>
                          <a href="?l=YXBpLTIwMTctMDMtMDcubG9n" class="list-group-item ">
                api-2017-03-07.log
              </a>
                      </div>
        </div>
        <div class="col-sm-9 col-md-10 table-container">
                    <div id="table-log_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="table-log_length"><label>Show <select name="table-log_length" aria-controls="table-log" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-6"><div id="table-log_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="table-log"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="table-log" class="table table-striped dataTable no-footer" role="grid" aria-describedby="table-log_info">
            <thead>
              <tr role="row"><th class="sorting" tabindex="0" aria-controls="table-log" rowspan="1" colspan="1" aria-label="Level: activate to sort column ascending" style="width: 250px;">Level</th><th class="sorting_desc" tabindex="0" aria-controls="table-log" rowspan="1" colspan="1" aria-sort="descending" aria-label="Context: activate to sort column ascending" style="width: 317px;">Context</th><th class="sorting" tabindex="0" aria-controls="table-log" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style="width: 227px;">Date</th><th class="sorting" tabindex="0" aria-controls="table-log" rowspan="1" colspan="1" aria-label="Content: activate to sort column ascending" style="width: 323px;">Content</th></tr>
            </thead>
            <tbody>


            <tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">No data available in table</td></tr></tbody>
          </table></div></div><div class="row"><div class="col-sm-6"><div class="dataTables_info" id="table-log_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-6"><div class="dataTables_paginate paging_simple_numbers" id="table-log_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="table-log" tabindex="0" id="table-log_previous"><a href="#">Previous</a></li><li class="paginate_button next disabled" aria-controls="table-log" tabindex="0" id="table-log_next"><a href="#">Next</a></li></ul></div></div></div></div>
                    <div>
            <a href="?dl=cGF5cGFsLmxvZw=="><span class="glyphicon glyphicon-download-alt"></span> Download file</a>
            -
            <a id="delete-log" href="?del=cGF5cGFsLmxvZw=="><span class="glyphicon glyphicon-trash"></span> Delete file</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
import React from 'react';
import TableEditor from 'react-table-editor';

export default function UsersTableEdit() {
  const advancedColumns = [
    {
      width: 250,
      label: 'Company',
      field: 'company',
    },
    {
      width: 250,
      sort: false,
      defaultValue: 'Warsaw',
      options: ['London', 'Warsaw', 'New York'],
      inputType: 'select',
      label: 'Office',
      field: 'office',
    },
    {
      width: 250,
      inputType: 'number',
      defaultValue: 1,
      label: 'Employees',
      field: 'employees',
    },
    {
      width: 100,
      defaultValue: false,
      inputType: 'checkbox',
      label: 'International',
      field: 'international',
    },
  ];
  
  const advancedRows = [
    {
      company: 'Smith & Johnson',
      office: 'London',
      employees: 30,
      international: true,
    },
    {
      company: 'P.J. Company',
      office: 'London',
      employees: 80,
      international: false,
    },
    {
      company: 'Food & Wine',
      office: 'London',
      employees: 12,
      international: false,
    },
    {
      company: 'IT Service',
      office: 'London',
      employees: 17,
      international: false,
    },
    {
      company: 'A. Jonson Gallery',
      office: 'London',
      employees: 4,
      international: false,
    },
    {
      company: 'F.A. Architects',
      office: 'London',
      employees: 4,
      international: false,
    },
  ];

  const html = `<div class="d-flex justify-content-end mb-4">
                  <div class="form-outline">
                    <input
                      data-mdb-search
                      data-mdb-target="#table_modal"
                      type="text"
                      id="search_modal"
                      class="form-control"
                    />
                    <label class="form-label" for="search_modal">Search</label>
                  </div>
                  <button class="btn btn-primary btn-sm ms-3" data-mdb-add-entry data-mdb-target="#table_modal">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
                <hr />
                <div id="table_modal">
              </div>`

const btns = [
  {
    tag: 'strong',
    className: 'hoge',
    icon: <span>ボタン</span>
  },
  {
    tag: 'a',
    className: 'test',
    icon: <span>リンク</span>
  }
]

  return (
    <React.Fragment>
      <TableEditor 
        html={html} 
        btns={btns}
        onChange={html => console.log(html)}
      />
    </React.Fragment>
  )
}
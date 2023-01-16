import "./listCollection.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function ListCollection() {
  const { lists, dispatch } = useContext(ListContext);

  //fetch data
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  // handleDelete
  const handleDelete = (id) => {
    deleteList(id,dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={"/list/" + params.row._id}
              state={{ list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <Delete
              onClick={() => handleDelete(params.row._id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}

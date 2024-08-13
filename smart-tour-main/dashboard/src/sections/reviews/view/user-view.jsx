import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import TableEmptyRows from '../table-empty-rows';
import TableNoData from '../table-no-data';
import TableHeadData from '../table-head';
import TableToolbar from '../table-toolbar';
import axios from 'axios';

import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [reviews, setreviews] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openModel, setopenModel] = useState(false);
  const handleOpen = () => setopenModel(true);
  const handleClose = () => setopenModel(false);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = reviews?.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: reviews,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  console.log('reviews', dataFiltered);

  const notFound = dataFiltered.length === 0;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/reviews/reviews`);
      console.log(response.data);
      setreviews(response.data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const [open, setOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedReview, setselectedReview] = useState(null);

  const handleOpenMenu = (event, rowId) => {
    setAnchorEl(event.currentTarget);
    setOpen(rowId);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { _id, createdAt } = formData;
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_BACKEND}/reviews/reviews/${id}`
      );
      alert('Review Deleted Succesfully');
      await fetchData();
      setFormData([]);
      handleClose();
      setOpen(null);
    } catch (error) {
      alert('Something went wrong');
      console.error('Error deleting records:', error);
      setselectedReview(null);
      setFormData([]);
      handleClose();
    }
  };
  const columns = [
    { id: '_id', label: 'Id' },
    { id: 'rating', label: 'Rating' },
    { id: 'comment', label: 'Comment' },
    { id: 'place', label: 'Place Name' },

    { id: 'createdAt', label: 'createdAt' },
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">reviews</Typography>
      </Stack>

      <Card>
        <TableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <TableHeadData
                order={order}
                orderBy={orderBy}
                rowCount={reviews.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[...columns, { id: '', label: '' }]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <>
                      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
                        <TableCell>{row._id}</TableCell>

                        <TableCell>
                          <Box
                            sx={{
                              '& > legend': { mt: 2 },
                            }}
                          >
                            <Rating name="read-only" value={row.rating} readOnly />
                          </Box>
                        </TableCell>
                        <TableCell>{row.comment}</TableCell>
                        <TableCell>{row.place}</TableCell>

                        <TableCell>{new Date(row.createdAt).toLocaleDateString()}</TableCell>

                        <TableCell align="right" key={row._id}>
                          <IconButton onClick={(event) => handleOpenMenu(event, row._id)}>
                            <Iconify icon="eva:more-vertical-fill" />
                          </IconButton>
                        </TableCell>
                      </TableRow>

                      <Popover
                        open={open === row._id}
                        anchorEl={anchorEl}
                        onClose={() => handleCloseMenu()}
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                          sx: { width: 140 },
                        }}
                        key={row._id}
                      >
                        <MenuItem
                          key={row._id}
                          onClick={() => {
                            handleDelete(row._id);
                          }}
                          sx={{ color: 'error.main' }}
                        >
                          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                          Delete
                        </MenuItem>
                      </Popover>
                    </>
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, reviews.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={reviews.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}

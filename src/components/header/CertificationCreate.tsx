import { Alert, AlertTitle, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { WarningAmberRounded, WarningRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { CertificationPostType, MatchingPostType, initCertificationPostType } from '../../types';
import dateTimeFormat from '../../utils/dateTimeFormat';
import durationTimeFormat from '../../utils/durationTimeFormat';
import { Link } from 'react-router-dom';

export function CertificationCreateIcon() {
  const { user } = useSelector((state: RootState) => state.user);
  const [myCertification, setMyCertification] = useState<MatchingPostType[]>([]);
  const [show, setShow] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const navigate = useNavigate();

  const handleClickIcon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpenBox(!openBox);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (openBox) {
      setOpenBox(false);
    }
  };

  useEffect(() => {
    if (user._id) {
      (async () => {
        const res = await fetch(`/api/myPage/myCertification`, { credentials: 'include' });
        const data = await res.json();
        console.log(data);

        setMyCertification(data);
      })();
    }
  }, [user]);

  return (
    <>
      {(user._id && !myCertification.length) || (
        <Certification>
          <div onClick={handleClickIcon}>{openBox ? <WarningAmberRounded className="icon" /> : <WarningRounded className="icon" />}</div>
          {openBox && (
            <>
              <div className="hidden" onClick={handleClose}></div>
              <TableContainer>
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>작성하지 않은 인증 글이 있습니다.</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {myCertification.map((post) => (
                      <TableRow key={post._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          <a href={`/matching/${post._id}`}>
                            {post.userDog.dogName} | {dateTimeFormat(post.walkingDate, 'date-time')} ({durationTimeFormat(post.walkingDuration)})
                          </a>
                        </TableCell>
                        <TableCell align="right">
                          <a href={`/certification/write/${post._id}`}>
                            <Button id={post._id} color="subW" variant="outlined" size="small">
                              작성하기
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Certification>
      )}
    </>
  );
}

const Certification = styled.div`
  position: relative;

  .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.red};
    font-size: 30px;
  }

  .hidden {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const TableContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 60px;
  right: -70px;

  border-radius: 4px;
  box-shadow: 1px 1px 4px 1px #0000001e;

  a:hover {
    color: ${({ theme }) => theme.sub};
  }
`;

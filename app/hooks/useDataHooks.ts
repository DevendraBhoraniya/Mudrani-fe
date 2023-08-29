import { useEffect, useState } from 'react';
import {
  fetchMemberApplications,
  fetchBorrows,
  fetchDeposits,
  fetchStakers,
  fetchRepays,
  fetchTrustlines,
  fetchUTokenMeta,
  fetchUserManagerMeta,
} from '@unioncredit/data';
import { useEnsName } from '../hooks/useENSName';

export function useDeposits() {
  const [deposits, setDeposits] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDeposits();
      setDeposits(data);
    }

    fetchData();
  }, []);

  return deposits;
}

export function useMemberApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMemberApplications();
      setApplications(data as any);
    }

    fetchData();
  }, []);

  return applications;
}

export function useBorrows() {
  const [borrows, setBorrows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchBorrows();
      setBorrows(data as any);
    }

    fetchData();
  }, []);

  return borrows;
}

export function useRepays() {
  const [repays, setRepays] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchRepays();
      setRepays(data as any);
    }

    fetchData();
  }, []);

  return repays;
}

export function useStakers() {
  const [stakers, setStakers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStakers();
      setStakers(data as any);
    }

    fetchData();
  }, []);

  return stakers;
}

export function useTrustlines() {
  const [trustlines, setTrustlines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTrustlines();
      setTrustlines(data as any);
    }

    fetchData();
  }, []);

  return trustlines;
}

export function useUTokenMeta() {
  const [uTokenMeta, setUTokenMeta] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchUTokenMeta();
      setUTokenMeta(data as any);
    }

    fetchData();
  }, []);

  return uTokenMeta;
}

export function useUserManagerMeta() {
  const [userManagerMeta, setUserManagerMeta] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchUserManagerMeta();
      setUserManagerMeta(data as any);
    }

    fetchData();
  }, []);

  return userManagerMeta;
}

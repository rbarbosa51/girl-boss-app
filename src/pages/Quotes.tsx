import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { quotes } from "@/data/quotesData";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import type { IQuotes } from "@/data/quotesInterface";
import axios from "axios";

export default function Quotes() {
  const [quotesData, setQuotesData] = useState<IQuotes[] | null>(null);

  useEffect(() => {
    setQuotesData([...quotes]);
    (async () => {
      try {
        const result = await axios.get("/mongo");
        const data: IQuotes[] = result.data;
        setQuotesData(data);
      } catch (e) {}
    })();
  }, []);
  return (
    <Card className="p-4 bg-red-200/40 rounded-lg shadow-md">
      <h1 className="text-3xl text-center drop-shadow-md">
        Inspirational Quotes
      </h1>
      <p className="text-center indent-4 mb-2 mx-4">
        Below are inspirational quotes.
      </p>
      <Table>
        <TableCaption>Quotes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Quotes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotesData &&
            quotesData.map((quote, i) => (
              <TableRow key={i}>
                <TableCell className="">{quote.author}</TableCell>
                <TableCell className="">
                  <em>{quote.quote}</em>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}

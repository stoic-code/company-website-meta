"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { changeStatus } from "@/actions/applicant.action";
import { Tabs } from "../../jobs/[id]/applicants/types";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const Status = ({
  status,
  applicantId,
}: {
  status: string;
  applicantId: string;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    try {
      const { success, message } = await changeStatus({
        _id: applicantId,
        status: e.target.value as Tabs,
      });

      toast({
        variant: success ? "success" : "destructive",
        title: success ? "Success !!" : "Failed !!",
        description: message,
      });
      if (success) {
        router.back();
        return;
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: "destructive",
        title: "Failed !!",
        description: "Couldn't send data to the server !!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {loading ? (
        <span className="select flex cursor-not-allowed items-center gap-2 text-muted-foreground">
          <Loader size={16} className="animate-spin" />
          Saving...
        </span>
      ) : (
        <>
          <Label>Status :</Label>
          <select onChange={handleChange} className="select" value={status}>
            <option value="">Not Changed</option>
            <option value="FIT">Good Fit</option>
            <option value="MAYBE">Maybe</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </>
      )}
    </div>
  );
};

export default Status;

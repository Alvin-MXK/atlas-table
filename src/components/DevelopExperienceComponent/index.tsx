import React from "react";
import { FeatureList, featureList } from "../../constants";
import "./index.css";

type Props = {
  supported: Array<FeatureList>;
  develop_low?: Array<FeatureList>;
  develop_medium?: Array<FeatureList>;
  develop_hight?: Array<FeatureList>;
  develop_experience?: React.ReactElement;
  summary?: React.ReactElement;
};

export function DevelopExperienceComponent({
  supported,
  develop_low,
  develop_medium,
  develop_hight,
  develop_experience,
  summary,
}: Props) {
  return (
    <div className="content">
      <div className="box">
        <h3>已经支持的</h3>
        {supported.map((item) => (
          <div>{featureList[item]}</div>
        ))}
      </div>
      <div className="box">
        <h3>需要开发(低)</h3>
        {develop_low?.map((item) => (
          <div>{featureList[item]}</div>
        ))}
      </div>
      <div className="box">
        <h3>需要开发(中)</h3>
        {develop_medium?.map((item) => (
          <div>{featureList[item]}</div>
        ))}
      </div>
      <div className="box">
        <h3>需要开发(高)</h3>
        {develop_hight?.map((item) => (
          <div>{featureList[item]}</div>
        ))}
      </div>
      <div className="box">
        <h3>开发体验</h3>
        {develop_experience}
      </div>
      {summary && (
        <div className="box">
          <h3>总结</h3>
          {summary}
        </div>
      )}
    </div>
  );
}

# Consumer–Provider Handshake

## Thông tin chung

- Lab: FIT4110 Lab 03
- Ngày: 2026-05-25
- Provider team: Nhóm 11 (AI Vision B4)
- Consumer team: Nhóm 12 (Core Business B6)
- Provider service: AI Vision Service
- Consumer service: Core Business Service

## Contract

- Contract file: `contracts/ai-vision.openapi.yaml`
- Mock base URL: `http://localhost:4010`
- Auth method: Bearer Token (`ai-vision-mock-token`)
- Endpoint được test: `POST /vision/face-match`

## Smoke test

### Request

```http
POST /vision/face-match
Authorization: Bearer ai-vision-mock-token
Content-Type: application/json
```

```json
{
  "requestType": "IMAGE_REF",
  "traceId": "0196fb3d-4ad7-7d1e-9f49-5d5148d2babc",
  "imageRef": "https://storage.campus.local/frames/frame-001.jpg"
}
```

### Expected response

```json
{
  "matchId": "0196fb3d-4ad7-7d1e-9f49-5d5148d2babc",
  "traceId": "0196fb3d-4ad7-7d1e-9f49-5d5148d2babc",
  "decision": "MATCH",
  "confidence": 0.97,
  "subjectId": "STUDENT-2026-001",
  "reason": null,
  "modelVersion": "v2.1.0",
  "processedAt": "2026-05-10T08:00:00Z"
}
```

## Kết quả

- [x] Consumer gọi mock thành công.
- [x] Consumer parse được field cần dùng (`decision`, `confidence`, `subjectId`).
- [x] Consumer hiểu lỗi 4xx/5xx provider trả về (Problem Details dạng `application/problem+json`).
- [x] Có Newman report hoặc screenshot.

## Ghi chú thay đổi hợp đồng

| Nội dung | Trước | Sau | Người đồng ý |
|---|---|---|---|
| Bổ sung endpoint /vision/detections | Chưa có | Đã thêm endpoint GET list phân trang | Cả hai bên |

## Xác nhận

- Provider representative: Nhóm 11 (AI Vision)
- Consumer representative: Nhóm 12 (Core Business)
